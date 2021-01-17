// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import GridOn from "@material-ui/icons/GridOn";
import Image from "@material-ui/icons/Image";
import Place from "@material-ui/icons/Place";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,

    layout: "/admin",
  },
  {
    collapse: true,
    name: "Components",
    icon: GridOn,
    state: "tablesCollapse",
    views: [
      {
        collapse: true,
        name: "Multi Level Collapse",
        mini: "MC",
        state: "multiCollapse",
        views: [
          {
            path: "/buttons",
            name: "Buttons",
            mini: "B",

            layout: "/admin",
          },
        ],
      },
      {
        path: "/buttons",
        name: "Buttons",
        mini: "B",

        layout: "/admin",
      },
      {
        path: "/grid-system",
        name: "Grid System",
        mini: "GS",

        layout: "/admin",
      },
      {
        path: "/panels",
        name: "Panels",
        mini: "P",

        layout: "/admin",
      },
      {
        path: "/sweet-alert",
        name: "Sweet Alert",
        mini: "SA",

        layout: "/admin",
      },
      {
        path: "/notifications",
        name: "Notifications",
        mini: "N",

        layout: "/admin",
      },
      {
        path: "/icons",
        name: "Icons",
        mini: "I",

        layout: "/admin",
      },
      {
        path: "/typography",
        name: "Typography",
        mini: "T",

        layout: "/admin",
      },
      {
        path: "/regular-forms",
        name: "Regular Forms",
        mini: "RF",

        layout: "/admin",
      },
      {
        path: "/extended-forms",
        name: "Extended Forms",
        mini: "EF",

        layout: "/admin",
      },
      {
        path: "/validation-forms",
        name: "Validation Forms",
        mini: "VF",

        layout: "/admin",
      },
      {
        path: "/wizard",
        name: "Wizard",
        mini: "W",

        layout: "/admin",
      },
      {
        path: "/regular-tables",
        name: "Regular Tables",
        mini: "RT",

        layout: "/admin",
      },
      {
        path: "/extended-tables",
        name: "Extended Tables",
        mini: "ET",

        layout: "/admin",
      },
      {
        path: "/react-tables",
        name: "React Tables",
        mini: "RT",

        layout: "/admin",
      },
      {
        path: "/widgets",
        name: "Widgets",
        mini: "W",

        layout: "/admin",
      },
      {
        path: "/charts",
        name: "Charts",
        mini: "C",

        layout: "/admin",
      },
    ],
  },
];
export default dashRoutes;
