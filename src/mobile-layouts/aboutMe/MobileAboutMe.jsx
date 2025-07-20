import React from "react";
import { Card, Typography } from "antd";
import {
  UserOutlined,
  BookOutlined,
  CalendarOutlined,
} from "@ant-design/icons"; // Add icons

const { Title, Text, Paragraph } = Typography;

const personalInformation = {
  fullname: "Lê Anh Bằng",
  dob: "5th October, 2003",
  major: "Professional Communication (Bachelor), Entertainment",
  slogan: "“Sketches whisper, blooming into full color”",
  Introduction: `As a child, I found joy in many things - life felt like a flower blooming in full color. But as I grew older, I began to realize a quiet truth: a flower that bears too vivid a color, too personal a shade, is often left unaccepted. Still, I chose not to mute those colors. Instead, I celebrate the beauty each individual carries, honoring their essence and refining it into something rare - something the world no longer rejects, but deeply desires.`,
};

const MobileAboutMe = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "-25rem",
      }}
    >
      <Card
        style={{
          width: "100%",
          backgroundColor: "rgb(0, 0, 0, 0.8)",
          borderRadius: "12px",
        }}
      >
        {/* Fullname with yellow color */}
        <Title
          level={2}
          style={{
            color: "#fff",
            textAlign: "left",
            display: "flex",
            alignItems: "center",
          }}
        >
          <UserOutlined style={{ marginRight: "8px", color: "#fff" }} />{" "}
          <span style={{ color: "#fff" }}>{personalInformation.fullname}</span>
        </Title>

        <Paragraph
          style={{
            fontSize: "16px",
            marginBottom: "20px",
            textAlign: "left",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "16px",
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
            {personalInformation.slogan}
          </span>

          {personalInformation.Introduction}
        </Paragraph>

        {/* Major with #0a101e color */}
        <Text
          style={{
            fontSize: "18px",

            marginBottom: "10px",

            textAlign: "left",
            display: "flex",
            alignItems: "center",
          }}
        >
          <BookOutlined style={{ marginRight: "8px", color: "#a7abb6" }} />{" "}
          {/* Major Icon */}
          <span style={{ color: "#a7abb6" }}>
            <strong>Major:</strong> {personalInformation.major}
          </span>
        </Text>

        {/* DOB with #0a101e color */}
        <Text
          style={{
            fontSize: "18px",
            textAlign: "left",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CalendarOutlined style={{ marginRight: "8px", color: "#a7abb6" }} />{" "}
          {/* DOB Icon */}
          <span style={{ color: "#a7abb6" }}>
            <strong>Date of Birth:</strong> {personalInformation.dob}
          </span>
        </Text>
      </Card>
    </div>
  );
};

export default MobileAboutMe;
