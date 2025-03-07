// In your XML route
export const GET = async (request, { params }) => {
  try {
    const id = params.id;
    const listingRef = doc(db, "listings", id);
    const listingSnap = await getDoc(listingRef);

    if (!listingSnap.exists()) {
      return NextResponse.json({ error: "Listing not found" }, { status: 404 });
    }

    // Get just the XML from the document
    const xmlData = listingSnap.data().xmlData;

    return new NextResponse(xmlData, {
      headers: { "Content-Type": "application/xml" },
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Error fetching XML" }, { status: 500 });
  }
};
