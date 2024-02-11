'use client'
import sanityConfig from "../../../../../sanity.config";
import { NextStudio } from "next-sanity/studio";

const AdminPage = () => {
  return <NextStudio config={sanityConfig} />;
};

export default AdminPage;
