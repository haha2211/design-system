import React, { lazy } from "react";

const componentPages = [
  "accordion",
  "avatar",
  "badge",
  "breadcrumb",
  "button",
  "combobox",
  "comment",
  "dialog",
  "divider",
  "dropdown",
  "icon",
  "input",
  "link",
  "pagination",
  "progressbar",
  "radio",
  "select",
  "skeleton",
  "spinner",
  "tablist",
  "tag",
  "textarea",
  "toast",
  "tooltip",
];

const routes = componentPages.map((component) => ({
  path: `/component/${component}`,
  element: lazy(() => import(`@/pages/${component.charAt(0).toUpperCase() + component.slice(1)}Page.tsx`)),
}));

export default routes;