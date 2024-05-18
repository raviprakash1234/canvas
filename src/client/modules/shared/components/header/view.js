const HeaderView = () => {
  return (
    <>
      <div
        style={{
          width: "99%",
          height: "30px",
          padding: "10px",
          backgroundColor: "teal",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ color: "white" }}>Home</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div style={{ color: "white" }}>Log In</div>
          <div style={{ color: "white" }}>Setting</div>
        </div>
      </div>
    </>
  );
};

export default HeaderView;
