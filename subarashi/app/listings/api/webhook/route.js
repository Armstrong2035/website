// app/listings/api/webhook/route.js
import { NextResponse } from "next/server";
import { generateXML } from "../../lib/xml/generator";
import { sendListingToFirestore } from "../../../../firebaseUtils/app";

// Value mappings
const RENTAL_FREQUENCY = {
  0: "Monthly",
  1: "Yearly",
  2: "Weekly",
  3: "Daily",
};

const FURNISHED_STATUS = {
  0: "Yes",
  1: "No",
  2: "Partly",
};

const PROPERTY_TYPE = {
  0: "Apartment",
  1: "Duplex",
  2: "Hotel Apartment",
  3: "Loft Apartment",
  4: "Pent House",
  5: "Residential Building",
  6: "Residential Floor",
  7: "Townhouse",
  8: "Villa",
  9: "Commercial Building",
  10: "Commercial Floor",
  11: "Factory",
  12: "Labour Camp",
  13: "Office",
  14: "Shop",
  15: "Warehouse",
  16: "Other Commercial",
  17: "Commercial Land",
  18: "Residential Land",
};
function getFieldValue(fields, fieldName) {
  const field = fields.find((f) => f.name === fieldName);
  return field ? field.value : "";
}

export const POST = async (request) => {
  try {
    const body = await request.json();
    // console.log("Full webhook data:", JSON.stringify(body, null, 2));

    const payload = body.payload;
    const dateCreated = new Date(parseInt(payload.date_created));
    const propertyRef = `SUB-${dateCreated.getFullYear()}-${payload.id.slice(
      -4
    )}`;

    console.log("2. Created property ref:", propertyRef);

    const listing = {
      reference: propertyRef,
      listing_type: payload.list.name.toLowerCase(),
      details: {
        permit_number: getFieldValue(payload.custom_fields, "Permit Number"),
        property_type:
          PROPERTY_TYPE[
            getFieldValue(payload.custom_fields, "Property Type")
          ] || "",
        price: getFieldValue(payload.custom_fields, "Price"),
        rental_frequency:
          RENTAL_FREQUENCY[
            getFieldValue(payload.custom_fields, "Rental Frequency")
          ] || "",
        size: getFieldValue(
          payload.custom_fields,
          "Property size (square feet)"
        ),
        plot_area: getFieldValue(
          payload.custom_fields,
          "Plot area (square feet)"
        ),
        bedrooms: getFieldValue(payload.custom_fields, "Bedrooms"),
        bathrooms: getFieldValue(payload.custom_fields, "Bathrooms"),
        furnished:
          FURNISHED_STATUS[getFieldValue(payload.custom_fields, "Furnished")] ||
          "",
      },
      content: {
        title: getFieldValue(payload.custom_fields, "Property Title"),
        title_ar: getFieldValue(
          payload.custom_fields,
          "Property title (Arabic)"
        ),
        description: getFieldValue(
          payload.custom_fields,
          "Property Description"
        ),
        description_ar: getFieldValue(
          payload.custom_fields,
          "Property Description (Arabic)"
        ),
      },
      location: {
        city: getFieldValue(payload.custom_fields, "City"),
        locality: getFieldValue(payload.custom_fields, "Locality"),
        sub_locality: getFieldValue(payload.custom_fields, "Sub locality"),
        tower_name: getFieldValue(payload.custom_fields, "Tower name"),
      },
      agent: {
        name: getFieldValue(payload.custom_fields, "Agent"),
        email: getFieldValue(payload.custom_fields, "Agent Email"),
        phone: getFieldValue(payload.custom_fields, "Agent phone number"),
      },
      features: [
        getFieldValue(payload.custom_fields, "Feature"),
        getFieldValue(payload.custom_fields, "Feature 1"),
        getFieldValue(payload.custom_fields, "Feature 2"),
        getFieldValue(payload.custom_fields, "Feature 3"),
      ],
      images: [
        getFieldValue(payload.custom_fields, "Media 1"),
        getFieldValue(payload.custom_fields, "Media 2"),
        getFieldValue(payload.custom_fields, "Media 3"),
        getFieldValue(payload.custom_fields, "Media 4"),
      ].filter(Boolean),
      portals: getFieldValue(payload.custom_fields, "Portals"),
      status: "live",
      last_updated: new Date().toISOString(),
    };

    console.log("Mapped listing:", JSON.stringify(listing, null, 2));

    const xml = await generateXML(listing);

    console.log("4. Generated XML");
    const listingId = listing.reference;
    console.log("5. About to send to Firestore", listingId);

    await sendListingToFirestore(listing, xml, listingId);

    console.log("6. Sent to Firestore");

    return NextResponse.json({
      success: true,
      listing,
      xml,
      xmlUrl: `/listings/xmlfiles/${listing.reference}`,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
