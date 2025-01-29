export async function generateXML(listing) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<Properties>
  <Property>
    <Property_Ref_No><![CDATA[${listing.reference}]]></Property_Ref_No>
    <Permit_Number><![CDATA[${listing.details.permit_number}]]></Permit_Number>
    <Property_Status><![CDATA[live]]></Property_Status>
    <Property_purpose><![CDATA[${
      listing.listing_type === "rental" ? "Rent" : "Buy"
    }]]></Property_purpose>
    <Property_Type><![CDATA[${listing.details.property_type}]]></Property_Type>
    <Property_Size><![CDATA[${listing.details.size}]]></Property_Size>
    <Property_Size_Unit><![CDATA[SQFT]]></Property_Size_Unit>
    <plotArea><![CDATA[${listing.details.plot_area}]]></plotArea>
    <Bedrooms><![CDATA[${listing.details.bedrooms}]]></Bedrooms>
    <Bathrooms><![CDATA[${listing.details.bathrooms}]]></Bathrooms>
    <Features>
      ${listing.features
        .map((feature) => `<Feature><![CDATA[${feature}]]></Feature>`)
        .join("\n      ")}
    </Features>
    <Off_plan><![CDATA[No]]></Off_plan>
    <Portals>
      <Portal><![CDATA[Bayut]]></Portal>
      <Portal><![CDATA[dubizzle]]></Portal>
    </Portals>
    <Last_Updated><![CDATA[${listing.last_updated}]]></Last_Updated>
    <Property_Title><![CDATA[${listing.content.title}]]></Property_Title>
    <Property_Description><![CDATA[${
      listing.content.description
    }]]></Property_Description>
    <Property_Title_AR><![CDATA[${
      listing.content.title_ar
    }]]></Property_Title_AR>
    <Property_Description_AR><![CDATA[${
      listing.content.description_ar
    }]]></Property_Description_AR>
    <Price><![CDATA[${listing.details.price}]]></Price>
    <Furnished><![CDATA[${listing.details.furnished}]]></Furnished>
    <City><![CDATA[${listing.location.city}]]></City>
    <Locality><![CDATA[${listing.location.locality}]]></Locality>
    <Sub_Locality><![CDATA[${listing.location.sub_locality}]]></Sub_Locality>
    <Tower_Name><![CDATA[${listing.location.tower_name}]]></Tower_Name>
    <Images>
  ${listing.images
    .map((imageUrl) => `<Image><![CDATA[${imageUrl}]]></Image>`)
    .join("\n      ")}
</Images>
    <Listing_Agent><![CDATA[${listing.agent.name}]]></Listing_Agent>
    <Listing_Agent_Phone><![CDATA[${
      listing.agent.phone
    }]]></Listing_Agent_Phone>
    <Listing_Agent_Email><![CDATA[${
      listing.agent.email
    }]]></Listing_Agent_Email>
  </Property>
</Properties>`;

  return xml;
}
