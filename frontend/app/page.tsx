"use client";

import SkeletonGrid from "@/components/SkeletonGrid";
import DashboardLayout from "@/components/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";

export default function Page() {
  return (
    <DashboardLayout>
      <PageContainer>
        <SkeletonGrid />
      </PageContainer>
    </DashboardLayout>
  );
}