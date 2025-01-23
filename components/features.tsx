"use client";

import dynamic from "next/dynamic";
import React, { Component } from "react";
const LazyWhyUs = dynamic(() => import("@/components/ui/WhyUs"));
const LazyHeroWhatWeDo = dynamic(() => import("@/components/ui/HeroWhatWeDo"));
const LazyZenquaIndustryExpertise = dynamic(
  () => import("@/components/ui/ZenquaIndustryExpertise")
);
const LazyZenquaGlanceComponent = dynamic(
  () => import("@/components/ui/ZenquaGlance")
);
const LazyAdoptableApprochComponent = dynamic(
  () => import("@/components/ui/AdoptableApproch")
);
const LazyHireDeveloper = dynamic(
  () => import("@/components/ui/LazyHireDeveloper")
);

interface Statistic {
  label: string;
  value: number;
  unit?: string;
}

interface StatsCardProps {
  statistics: Statistic[];
}

interface StatsCardState {}

// *****************************our service ssection*******

// *****************************our service ssection*******

class StatsCard extends Component<StatsCardProps, StatsCardState> {
  animationIntervals: NodeJS.Timeout[] = [];

  constructor(props: StatsCardProps) {
    super(props);
    this.state = {};
  }

  componentWillUnmount() {
    this.animationIntervals.forEach((interval) => clearInterval(interval));
  }

  render() {
    return (
      <>
        <LazyZenquaGlanceComponent isCSSApply={true} />
        <LazyHeroWhatWeDo />
        <LazyZenquaIndustryExpertise />
        <LazyWhyUs isFeature={true} isCSSApply={true} />
        <LazyAdoptableApprochComponent isCSSApply={true} />
        <LazyHireDeveloper />
      </>
    );
  }
}
const stats: any[] = [
  { label: "Project Delivered", value: 2500, unit: "+" },
  { label: "Satisfied Clients", value: 800, unit: "+" },
  { label: "Experts on Board", value: 100, unit: "+" },
  { label: "Years of Experience", value: 14, unit: "+" },
];

export default function Testimonials() {
  return (
    <>
      <section className="py-12 md:py-12">
        <StatsCard statistics={stats} />
      </section>
    </>
  );
}
