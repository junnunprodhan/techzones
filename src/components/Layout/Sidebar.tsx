"use client";

import { Layout, Menu, Button, theme } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "dashboard",
              icon: <UserOutlined />,
              label: <Link href="/dashboard">Dashboard</Link>,
            },
            {
              key: "dashboard/all-products/",
              icon: <VideoCameraOutlined />,
              label: <Link href="dashboard/all-products">All-Products</Link>,
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
    </div>
  );
};

export default Sidebar;
