import { NavLink, Outlet } from "react-router-dom";
import { Layout, Menu, MenuProps } from "antd";
const { Content, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <NavLink to="/dashboard">Dashboard</NavLink>,
  },
  {
    key: "2",
    label: <NavLink to="/dashboard/donations">Donations</NavLink>,
  },
  {
    key: "3",
    label: <NavLink to="/dashboard/create-donation">Add Donation</NavLink>,
  },
  {
    key: "4",
    label: (
      <NavLink to="/dashboard/create-testimonial">Add Testimonial</NavLink>
    ),
  },
];

const DashboardLayout = () => {
  return (
    <main>
      <Layout className="min-h-[calc(100dvh-64px)]">
        <Sider breakpoint="lg" collapsedWidth="0">
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </Sider>

        <Layout>
          {/* content part */}
          <Content className="bg-light-white dark:bg-light-black dark:text-deep-white">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </main>
  );
};

export default DashboardLayout;
