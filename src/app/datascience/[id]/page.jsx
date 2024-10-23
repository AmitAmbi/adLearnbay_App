// src/app/datascience/[id]/page.jsx
import React from 'react';
import { getPageData } from '@/utils/getDSPageData';


const Page = async ({ params }) => {
  const { id } = params;
  const pageData = await getPageData(id);

  if (pageData.error) {
    return <div>{pageData.error}</div>;
  }

  return (
    <div>
 
    </div>
  );
};

export default Page;
