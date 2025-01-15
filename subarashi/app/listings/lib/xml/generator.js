// lib/xml/generator.js

export async function generateXML(data) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<Properties>
  <Property>
    <Property_Ref_No><![CDATA[${data.task_id}]]></Property_Ref_No>
    <Permit_Number><![CDATA[${data.permit_number}]]></Permit_Number>
    <Property_Status><![CDATA[live]]></Property_Status>
    <Property_purpose><![CDATA[${data.purpose}]]></Property_purpose>
    <Property_Type><![CDATA[${data.property_type}]]></Property_Type>
    <Property_Size><![CDATA[${data.size}]]></Property_Size>
    <Property_Size_Unit><![CDATA[SQFT]]></Property_Size_Unit>
    <plotArea><![CDATA[${data.plot_area}]]></plotArea>
    <Bedrooms><![CDATA[${data.bedrooms}]]></Bedrooms>
    <Bathrooms><![CDATA[${data.bathrooms}]]></Bathrooms>
    <Features>
      ${
        data.features
          ? data.features
              .map((feature) => `<Feature><![CDATA[${feature}]]></Feature>`)
              .join("\n      ")
          : ""
      }
    </Features>
    <Off_plan><![CDATA[${data.off_plan ? "Yes" : "No"}]]></Off_plan>
    <Portals>
      <Portal><![CDATA[Bayut]]></Portal>
      <Portal><![CDATA[dubizzle]]></Portal>
    </Portals>
    <Last_Updated><![CDATA[${new Date().toISOString()}]]></Last_Updated>
    <Property_Title><![CDATA[${data.title}]]></Property_Title>
    <Property_Description><![CDATA[${data.description}]]></Property_Description>
    <Price><![CDATA[${data.price}]]></Price>
    <Furnished><![CDATA[${data.furnished}]]></Furnished>
    <Images>
      ${
        data.images
          ? data.images
              .map((image) => `<Image><![CDATA[${image}]]></Image>`)
              .join("\n      ")
          : ""
      }
    </Images>
    <City><![CDATA[${data.city}]]></City>
    <Locality><![CDATA[${data.locality}]]></Locality>
    <Tower_Name><![CDATA[${data.tower_name || ""}]]></Tower_Name>
    <Listing_Agent><![CDATA[${data.agent_name}]]></Listing_Agent>
    <Listing_Agent_Phone><![CDATA[${data.agent_phone}]]></Listing_Agent_Phone>
    <Listing_Agent_Email><![CDATA[${data.agent_email}]]></Listing_Agent_Email>
  </Property>
</Properties>`;

  return xml;
}
