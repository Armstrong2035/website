export async function POST(req) {
  try {
    const formData = await req.json(); // Parse request body

    let convertedUnitPreference;
    if (formData.unitPreference === "5-bed") {
      convertedUnitPreference = 5;
    } else if (formData.unitPreference === "6-bed") {
      convertedUnitPreference = 6;
    } else if (formData.unitPreference === "7-bed") {
      convertedUnitPreference = 7;
    } else {
      convertedUnitPreference = formData.unitPreference;
    }

    const response = await fetch(
      "https://api.clickup.com/api/v2/list/901806483420/task?custom_task_ids=false",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: `${process.env.CLICKUP_API_KEY}`,
        },
        body: JSON.stringify({
          name: formData.name,
          custom_fields: [
            {
              id: "1e2f5097-5841-4f3b-b81d-d0e9b671b6d5",
              value: convertedUnitPreference,
            },
            {
              id: "c794127d-0d1a-4bd3-9f9c-b7b5c1727ef8",
              value: formData.phone,
            },
            {
              id: "ea67a630-e49d-4a58-8f2c-beab49acc336",
              value: formData.email,
            },
          ],
        }),
      }
    );

    const data = await response.json();
    return Response.json(data, { status: response.ok ? 200 : response.status });
  } catch (error) {
    console.error("Error adding task:", error);
    return Response.json({ message: "Error adding task" }, { status: 500 });
  }
}
