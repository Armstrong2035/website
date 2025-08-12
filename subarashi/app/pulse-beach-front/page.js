export default function VideoPage() {
  return (
    <div
      style={{
        background: "black",
        height: "100vh",
        width: "100vw",
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        controls
        autoPlay
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          outline: "none",
        }}
      >
        <source
          src="https://res.cloudinary.com/dulafqaoq/video/upload/v1754999709/Subarashi_Pulse_Beachfront_d4lkew.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
