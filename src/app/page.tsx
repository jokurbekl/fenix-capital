"use client";

import Image from "next/image";
import { useState } from "react";
import EmblaCarousel from "~/components/EmblaCarousel";
import { reviews } from "~/components/reviewsData";
import { Modal } from "antd";
import ApplyForm from "../components/ApplyForm";
import PhotoCarousel from "~/components/ProfitCarousel";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        // title={null}
        open={isModalOpen}
        onCancel={handleCancel}
        // width={1000}
        footer={null}
        // className="max-w-2/3 xs:m-0 md:w-full"
        // style={{ maxWidth: "80%", margin: "auto" }}
        title={null}
      >
        <ApplyForm setIsModalOpen={setIsModalOpen} />
      </Modal>

      <div
        data-elementor-type="wp-page"
        data-elementor-id={245}
        className="elementor elementor-245"
        data-elementor-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
        data-elementor-post-type="page"
      >
        {/* <PhotoCarousel /> */}
        <section className="bg-color elementor-section elementor-top-section elementor-element elementor-element-e3cb3b1 pbmit-bg-color-yes pbmit-elementor-bg-color-globalcolor pbmit-cursor-color-white-color elementor-section-full_width pbmit-col-stretched-none pbmit-bg-color-over-image elementor-section-height-default elementor-section-height-default pbmit-col-stretched-no pbmit-bgimage-yes pbmit-bgcolor-yes">
          <div className="elementor-background-overlay" />

          <div className="elementor-container elementor-column-gap-default">
            <div className="w-screen">
              <div className="mx-auto">
                <section
                  data-id="6a42e31"
                  data-element_type="section"
                  data-settings="{'background_background':'classic','premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
                  data-cursor="blackish-color"
                >
                  <div className="elementor-background-overlay" />
                  <div className="mx-auto w-full pt-5  md:w-3/4">
                    <div
                      className=""
                      data-id="142f7a9"
                      data-element_type="column"
                      data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
                    >
                      <div className="flex min-h-screen flex-col items-center justify-center">
                        <div className="elementor-widget-container w-32">
                          <Image
                            width={664}
                            height={234}
                            src="/logo.png"
                            className="attachment-large size-large wp-image-547"
                            alt=""
                            sizes="(max-width: 664px) 100vw, 664px"
                          />
                        </div>
                        <div className="">
                          <h2 className="elementor-heading-title elementor-size-default font-bold text-white">
                            FAST AI
                          </h2>
                        </div>
                        <div
                          className="elementor-element elementor-element-e4ed792 elementor-widget elementor-widget-heading"
                          data-id="e4ed792"
                          data-element_type="widget"
                          data-widget_type="heading.default"
                        >
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default spacing text-center text-3xl font-light tracking-tight text-gray-300">
                              Fully Automated Software Trading
                            </h2>
                          </div>
                        </div>
                        <div className="z-50 w-full md:w-3/4">
                          <iframe
                            src="https://player.vimeo.com/video/982677519?h=27d2e6f9f2&autoplay=1&loop=1"
                            allow="autoplay; fullscreen; picture-in-picture"
                            className=" aspect-video "
                          ></iframe>
                        </div>
                        <div
                          className="elementor-element elementor-element-2c296c3 pbmit-btn-color-blackish pbmit-btn-hover-color-light pbmit-btn-style-outline pbmit-btn-shape-round elementor-align-center access elementor-widget elementor-widget-button mt-12"
                          data-id="2c296c3"
                          data-element_type="widget"
                          data-widget_type="button.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a
                                className="elementor-button elementor-button-link elementor-size-sm"
                                href="#"
                              >
                                <span className="elementor-button-content-wrapper text-2xl">
                                  <span className="elementor-button-icon elementor-align-icon-left text-white">
                                    <i
                                      aria-hidden="true"
                                      className="mdi mdi-check"
                                    />{" "}
                                  </span>
                                  <span
                                    className="elementor-button-text text-white "
                                    onClick={showModal}
                                  >
                                    CLICK TO APPLY
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="border-none">
                          <div className="elementor-button-wrapper  border-b-[1px]">
                            <a
                              className="elementor-button elementor-button-link elementor-size-sm py bg-transparent p-0"
                              href="#verify"
                            >
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-icon elementor-align-icon-left">
                                  <i
                                    aria-hidden="true"
                                    className="far fa-eye"
                                  />{" "}
                                </span>
                                <span className="elementor-button-text ">
                                  VIEW LIVE ACCOUNT
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="m-5 w-3/4 rounded-xl border-[1px] border-neutral-500 bg-neutral-700 p-8 ">
                          <div className="">
                            <div className="pbmit-ihbox pbmit-ihbox-style-2">
                              <div className="pbmit-ihbox-icon">
                                <div className="pbmit-ihbox-icon-wrapper">
                                  <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                    <i className="pbmit-cleanfin-icon pbmit-cleanfin-icon-shield" />
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-ihbox-contents">
                                <h1 className="pbmit-element-title text-white">
                                  FiNex Capital Double Guarantee
                                </h1>
                                <div className="pbmit-heading-desc text-white">
                                  1) Guarantees profitability with FiNex Capital
                                  . If not profitable within 7 days, a refund is
                                  available.
                                  <br />
                                  <br />
                                  2) If your license fee is not fully recovered
                                  within 12 months, a refund of the difference
                                  is available.
                                  <br />
                                  <br />
                                  <a className="access" href="#">
                                    <span style={{ color: "#fff" }}>
                                      Learn More
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="mx-auto max-w-screen-2xl">
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-f4422e3 pbmit-bg-color-over-image p-3"
                      data-id="f4422e3"
                      data-element_type="column"
                      data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated rounded-xl bg-neutral-300  p-3">
                        <div
                          className="elementor-element elementor-element-3ea4eab b1 elementor-widget elementor-widget-pbmit_icon_heading"
                          data-id="3ea4eab"
                          data-element_type="widget"
                          data-widget_type="pbmit_icon_heading.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="pbmit-ihbox pbmit-ihbox-style-6">
                              <div className="pbmit-ihbox-wapper">
                                <div className="pbmit-ihbox-icon">
                                  <div className="pbmit-ihbox-icon-wrapper">
                                    <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                      <i className="pbmit-cleanfin-icon pbmit-cleanfin-icon-exchange" />
                                    </div>
                                  </div>
                                </div>
                                <div className="pbmit-ihbox-wapper-inner">
                                  <h2 className="pbmit-element-title">
                                    Intelligent Automated Trading
                                  </h2>
                                </div>
                              </div>
                              <div className="pbmit-ihbox-contents">
                                <div className="pbmit-heading-desc">
                                  Fully automated software trading artificial
                                  intelligence working autonomously on your
                                  personal trading account.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b1cce8f pbmit-bg-color-over-image "
                      data-id="b1cce8f"
                      data-element_type="column"
                      data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated p-3">
                        <div
                          className="elementor-element elementor-element-915e683 b1 elementor-widget elementor-widget-pbmit_icon_heading rounded-xl  bg-neutral-300 p-3"
                          data-id="915e683"
                          data-element_type="widget"
                          data-widget_type="pbmit_icon_heading.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="pbmit-ihbox pbmit-ihbox-style-6">
                              <div className="pbmit-ihbox-wapper">
                                <div className="pbmit-ihbox-icon">
                                  <div className="pbmit-ihbox-icon-wrapper">
                                    <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                      <i className="pbmit-cleanfin-icon pbmit-cleanfin-icon-bar-chart" />
                                    </div>
                                  </div>
                                </div>
                                <div className="pbmit-ihbox-wapper-inner">
                                  <h2 className="pbmit-element-title">
                                    Efficient Capital Utilization
                                  </h2>
                                </div>
                              </div>
                              <div className="pbmit-ihbox-contents">
                                <div className="pbmit-heading-desc">
                                  Compounding an average of 10% monthly by
                                  safely utilizing merely 7% of your capital on
                                  average.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-60f6108 pbmit-bg-color-over-image"
                      data-id="60f6108"
                      data-element_type="column"
                      data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated p-3">
                        <div
                          className="elementor-element elementor-element-373c338 b1 elementor-widget elementor-widget-pbmit_icon_heading rounded-xl  bg-neutral-300 p-3"
                          data-id="373c338"
                          data-element_type="widget"
                          data-widget_type="pbmit_icon_heading.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="pbmit-ihbox pbmit-ihbox-style-6">
                              <div className="pbmit-ihbox-wapper">
                                <div className="pbmit-ihbox-icon">
                                  <div className="pbmit-ihbox-icon-wrapper">
                                    <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                      <i className="pbmit-cleanfin-icon pbmit-cleanfin-icon-trophy" />
                                    </div>
                                  </div>
                                </div>
                                <div className="pbmit-ihbox-wapper-inner">
                                  <h2 className="pbmit-element-title">
                                    Proven Market Excellence
                                  </h2>
                                </div>
                              </div>
                              <div className="pbmit-ihbox-contents">
                                <div className="pbmit-heading-desc">
                                  Track record fit for Institutional capital
                                  with over 1000 days of excellent performance &
                                  a 300 day winning streak.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-3938ad0 pbmit-text-color-white pbmit-col-stretched-none pbmit-cursor-color-blackish-color pbmit-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="3938ad0"
                  data-element_type="section"
                  data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
                  data-cursor="blackish-color"
                >
                  <div className="w-full pb-32 pt-16">
                    <div
                      className="mx-auto w-7/12"
                      data-id="267db1b"
                      data-element_type="column"
                      data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated  w-3/4">
                        <div
                          className="elementor-element elementor-element-fb9aa6a elementor-widget elementor-widget-pbmit_icon_heading"
                          data-id="fb9aa6a"
                          data-element_type="widget"
                          data-widget_type="pbmit_icon_heading.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="pbmit-ihbox pbmit-ihbox-style-2">
                              <div className="pbmit-ihbox-icon">
                                <div className="pbmit-ihbox-icon-wrapper">
                                  <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                    <i className="pbmit-cleanfin-icon pbmit-cleanfin-icon-team" />
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-ihbox-contents">
                                <h2 className="pbmit-element-title">
                                  No Trading Experience Required
                                </h2>
                                <div className="pbmit-heading-desc text-xl">
                                  Made for beginners and experts. Anyone seeking
                                  passive income that wants to leverage AI to
                                  execute trades and have a profitable account
                                  without actually having to do any work.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-3ce335c elementor-widget elementor-widget-pbmit_icon_heading"
                          data-id="3ce335c"
                          data-element_type="widget"
                          data-widget_type="pbmit_icon_heading.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="pbmit-ihbox pbmit-ihbox-style-2">
                              <div className="pbmit-ihbox-icon">
                                <div className="pbmit-ihbox-icon-wrapper">
                                  <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                    <i className="pbmit-cleanfin-icon pbmit-cleanfin-icon-laptop-screen" />
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-ihbox-contents">
                                <h2 className="pbmit-element-title">
                                  FiNex Capital Trading Intelligence
                                </h2>
                                <div className="pbmit-heading-desc text-xl">
                                  Fully automated software trading. Inspired by
                                  hedge fund strategies. Runs 24/7 without human
                                  emotional bias. FiNex Capital algorithm
                                  strictly works on technical analysis.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-ecc7d65 elementor-widget elementor-widget-pbmit_icon_heading"
                          data-id="ecc7d65"
                          data-element_type="widget"
                          data-widget_type="pbmit_icon_heading.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="pbmit-ihbox pbmit-ihbox-style-2">
                              <div className="pbmit-ihbox-icon">
                                <div className="pbmit-ihbox-icon-wrapper">
                                  <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                    <i className="pbmit-cleanfin-icon pbmit-cleanfin-icon-money-bag" />
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-ihbox-contents">
                                <h2 className="pbmit-element-title">
                                  Consistent growth with 6-10% monthly returns
                                </h2>
                                <div className="pbmit-heading-desc text-xl">
                                  Our A.I. Intelligence with consistent
                                  profitability for nearly half a decade,
                                  enabling clients to earn passively with
                                  monthly returns ranging from 6-10%. Average of
                                  7% monthly gains.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full bg-gray-300 pb-12 pt-12">
            <div className="mx-auto w-10/12 md:w-7/12">
              <div className="elementor-widget-wrap elementor-element-populated w-1/2">
                <div
                  className="elementor-element elementor-element-671e917 elementor-hidden-mobile elementor-widget elementor-widget-pbmit_icon_heading"
                  data-id="671e917"
                  data-element_type="widget"
                  data-settings="{'_animation':'none'}"
                  data-widget_type="pbmit_icon_heading.default"
                >
                  <div className="elementor-widget-container">
                    <div className="pbmit-ihbox pbmit-ihbox-style-2">
                      <div className="pbmit-ihbox-icon">
                        <div className="pbmit-ihbox-icon-wrapper">
                          <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                            <i className="pbmit-cleanfin-icon pbmit-cleanfin-icon-shield" />
                          </div>
                        </div>
                      </div>
                      <div className="pbmit-ihbox-contents">
                        <h2 className="pbmit-element-title">
                          Verify Real Performance Data
                        </h2>
                        <div className="pbmit-heading-desc">
                          To verify the real performance data of FiNex&apos;s
                          trading strategies, you can view their live trading
                          account on FX Blue.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-5a7daf5 elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-pbmit_icon_heading"
                  data-id="5a7daf5"
                  data-element_type="widget"
                  data-settings="{'_animation':'none'}"
                  data-widget_type="pbmit_icon_heading.default"
                >
                  <div className="elementor-widget-container">
                    <div className="pbmit-ihbox pbmit-ihbox-style-6">
                      <div className="pbmit-ihbox-wapper">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                              <i className="pbmit-cleanfin-icon pbmit-cleanfin-icon-shield" />
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-ihbox-wapper-inner">
                          <h2 className="pbmit-element-title">
                            Verify Real Performance Data
                          </h2>
                        </div>
                      </div>
                      <div className="pbmit-ihbox-contents">
                        <div className="pbmit-heading-desc">
                          To verify the real performance data of FN
                          Capital&apos;s trading strategies, you can view their
                          live trading account on FX Blue.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" rounded-xl bg-sky-100  text-neutral-600">
                  <div className="elementor-widget-container m-2">
                    FX Blue is a leading service in the industry for the
                    analysis and publication of trading history. It provides
                    almost instant updates on trading activity, with the
                    frequency of updates being as often as every 60 seconds
                    during active trades. This offers a transparent and
                    up-to-date insight into the historical performance of FiNex
                    Capital trading activities.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-675b346 pbmit-bg-color-over-image pbmit-bgimage-no pbmit-bgcolor-yes"
              data-id="675b346"
              data-element_type="column"
              data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
            >
              <div className="elementor-widget-wrap"></div>
            </div>
          </div>
        </section>
        <section className=" w-full bg-gray-900 " id="verify">
          <div className="elementor-container elementor-column-gap-default p-6  ">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-963ae1f pbmit-bg-color-over-image pbmit-bgimage-no pbmit-bgcolor-yes"
              data-id="963ae1f"
              data-element_type="column"
              data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-44604ad elementor-hidden-mobile elementor-widget elementor-widget-html"
                  data-id="44604ad"
                  data-element_type="widget"
                  data-widget_type="html.default"
                >
                  <div className="elementor-widget-container mx-auto max-w-screen-2xl">
                    <iframe
                      src="https://www.fxblue.com/fxblueview.aspx?id=fn-capital"
                      width="100%"
                      height="850px"
                      style={{ border: "0px solid black" }}
                    ></iframe>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-30767f8 elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-html"
                  data-id="30767f8"
                  data-element_type="widget"
                  data-widget_type="html.default"
                >
                  <div className="elementor-widget-container">
                    <iframe
                      src="https://www.fxblue.com/fxblueview.aspx?id=fn-capital"
                      width="100%"
                      height="1400px"
                      style={{ border: "0px solid black" }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="theme-dark testimonials elementor-element-435c532d elementor-section-stretched pbmit-bg-color-yes pbmit-elementor-bg-color-globalcolor pbmit-text-color-white pbmit-col-stretched-none pbmit-cursor-color-blackish-color pbmit-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default pbmit-col-stretched-no pbmit-bgimage-no pbmit-bgcolor-yes mx-auto  bg-[#212c40] "
          data-id="435c532d"
          data-element_type="section"
          data-settings="{'stretch_section':'section-stretched','background_background':'classic','premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
          data-cursor="blackish-color"
        >
          <div className="elementor-background-overlay" />
          {/* <PhotoCarousel /> */}

          <div className="w-full">
            <h2 className="mx-auto w-fit">What our clients say</h2>
          </div>
          <EmblaCarousel slides={reviews} options={{ loop: true }} />
        </section>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-29dde52 elementor-section-stretched pbmit-bg-color-yes pbmit-elementor-bg-color-globalcolor pbmit-text-color-white elementor-section-full_width pbmit-col-stretched-none pbmit-cursor-color-blackish-color pbmit-bg-color-over-image elementor-section-height-default elementor-section-height-default pbmit-col-stretched-no pbmit-bgimage-no pbmit-bgcolor-yes "
          data-id="29dde52"
          data-element_type="section"
          data-settings="{'stretch_section':'section-stretched','premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
          data-cursor="blackish-color"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b7425de pbmit-bg-color-over-image pbmit-bgimage-no pbmit-bgcolor-yes"
              data-id="b7425de"
              data-element_type="column"
              data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-ac27906 pbmit-col-stretched-none pbmit-cursor-color-blackish-color pbmit-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="ac27906"
                  data-element_type="section"
                  data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
                  data-cursor="blackish-color"
                >
                  <div className="elementor-container elementor-column-gap-default mx-auto w-fit">
                    <div
                      className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-73df12d pbmit-bg-color-over-image"
                      data-id="73df12d"
                      data-element_type="column"
                      data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated w-full">
                        <h1 className="premium-title-header premium-title-style8 mx-auto w-fit">
                          <span
                            className="premium-title-text "
                            data-shiny-delay={6}
                            data-shiny-dur={3}
                          >
                            Real Clients. Real Results.{" "}
                          </span>
                        </h1>
                        <div
                          className="elementor-element elementor-element-9fe15c8 uael-img-grid__column-2 uael-img-grid-mobile__column-1 uael-img-grid-tablet__column-3 uael-ins-normal elementor-widget elementor-widget-uael-image-gallery"
                          data-id="9fe15c8"
                          data-element_type="widget"
                          data-settings="{'gallery_columns':'2','gallery_columns_mobile':'1','gallery_columns_tablet':'3','column_gap':{'unit':'px','size':20,'sizes':[]},'column_gap_tablet':{'unit':'px','size':'','sizes':[]},'column_gap_mobile':{'unit':'px','size':'','sizes':[]},'row_gap':{'unit':'px','size':20,'sizes':[]},'row_gap_tablet':{'unit':'px','size':'','sizes':[]},'row_gap_mobile':{'unit':'px','size':'','sizes':[]},'images_valign':'flex-start'}"
                          data-widget_type="uael-image-gallery.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="uael-gallery-parent uael-caption- uael-gallery-unjustified">
                              <div
                                className="uael-img-gallery-wrap uael-img-grid-wrap uael-img-grid-masonry-wrap uael-image-lightbox-wrap"
                                data-filter-default="All"
                                data-lightbox_actions="['fullScreen','close']"
                                data-lightbox-gallery-loop={1}
                              >
                                <div className="uael-grid-item  uael-img-gallery-item-4">
                                  <div className="uael-grid-item-content">
                                    <iframe
                                      src="https://player.vimeo.com/video/982682990?h=0&autoplay=1&loop=1&title=0&byline=0&portrait=0"
                                      allow="autoplay; fullscreen; picture-in-picture"
                                      className=" aspect-video w-3/4"
                                      width={500}
                                      height={600}
                                    ></iframe>
                                  </div>
                                </div>
                                <div className="uael-grid-item  uael-img-gallery-item-1">
                                  <div className="uael-grid-item-content">
                                    <iframe
                                      src="https://player.vimeo.com/video/982683107?h=0&autoplay=1&loop=1&title=0&byline=0&portrait=0"
                                      allow="autoplay; fullscreen; picture-in-picture"
                                      className=" aspect-video "
                                      height={600}
                                    ></iframe>
                                  </div>
                                </div>
                                <div className="uael-grid-item  uael-img-gallery-item-3">
                                  <div className="uael-grid-item-content">
                                    <iframe
                                      src="https://player.vimeo.com/video/982683245?h=27d2e6f9f2&autoplay=1&loop=1&title=0&byline=0&portrait=0"
                                      allow="autoplay; fullscreen; picture-in-picture"
                                      className=" aspect-video w-1/2"
                                      height={600}
                                    ></iframe>
                                  </div>
                                </div>
                                <div className="uael-grid-item  uael-img-gallery-item-2">
                                  <div className="uael-grid-item-content">
                                    <iframe
                                      src="https://player.vimeo.com/video/982683753?h=27d2e6f9f2&autoplay=1&loop=1&title=0&byline=0&portrait=0"
                                      allow="autoplay; fullscreen; picture-in-picture"
                                      className=" aspect-video w-1/2"
                                      height={600}
                                    ></iframe>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section
          className="theme-dark testimonials elementor-element-435c532d elementor-section-stretched pbmit-bg-color-yes pbmit-elementor-bg-color-globalcolor pbmit-text-color-white pbmit-col-stretched-none pbmit-cursor-color-blackish-color pbmit-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default pbmit-col-stretched-no pbmit-bgimage-no pbmit-bgcolor-yes mx-auto  bg-[#212c40] "
          data-id="435c532d"
          data-element_type="section"
          data-settings="{'stretch_section':'section-stretched','background_background':'classic','premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
          data-cursor="blackish-color"
        >
          <div className="elementor-background-overlay" />
          <div
            className="elementor-element elementor-element-2c296c3 pbmit-btn-color-blackish pbmit-btn-hover-color-light pbmit-btn-style-outline pbmit-btn-shape-round elementor-align-center access elementor-widget elementor-widget-button pb-12"
            data-id="2c296c3"
            data-element_type="widget"
            data-widget_type="button.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <button className="elementor-button elementor-button-link elementor-size-sm">
                  <span className="elementor-button-content-wrapper text-2xl">
                    <span className="elementor-button-icon elementor-align-icon-left text-white">
                      <i aria-hidden="true" className="mdi mdi-check" />{" "}
                    </span>
                    <span
                      className="elementor-button-text text-white "
                      onClick={showModal}
                    >
                      CLICK TO APPLY
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <PhotoCarousel />
        </section>

        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-9ba7d84 elementor-section-stretched pbmit-col-stretched-none bg-[#D2D8DB]"
          data-id="9ba7d84"
          data-element_type="section"
          data-settings="{'stretch_section':'section-stretched','background_background':'classic','premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
          data-cursor="blackish-color"
        >
          <div className="w-full pt-3">
            <h2 className="mx-auto w-fit text-5xl text-black">How It Works</h2>
          </div>
          <div className="elementor-container elementor-column-gap-no max-w-screen-xl">
            <div
              className="md:w-1/3"
              data-id="d620b9b"
              data-element_type="column"
              data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
            >
              <div className="elementor-widget-wrap elementor-element-populated border-r-[1px] border-neutral-300 p-3 md:p-[90px]">
                <div
                  className="elementor-element elementor-element-6ba2124 elementor-widget elementor-widget-pbmit_icon_heading"
                  data-id="6ba2124"
                  data-element_type="widget"
                  data-widget_type="pbmit_icon_heading.default"
                >
                  <div className="elementor-widget-container">
                    <div className="pbmit-ihbox pbmit-ihbox-style-6">
                      <div className="pbmit-ihbox-wapper">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                              <i className="pbmit-cleanfin-icon pbmit-cleanfin-icon-pie-chart-1" />
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-ihbox-wapper-inner w-fit">
                          <h2 className="pbmit-element-title w-fit">
                            Technical Analysis
                          </h2>
                        </div>
                      </div>
                      <div className="pbmit-ihbox-contents">
                        <div className="pbmit-heading-desc text-gray-900">
                          Our A.l. algorithm strictly works on technical
                          analysis. Unlike humans, the software doesn&apos;t
                          take breaks and can only make decisions based on data
                          and not emotion. This is important for avoiding human
                          errors.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="md:w-1/3"
              data-id="8e47306"
              data-element_type="column"
              data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
            >
              <div className="border-r-[1px] border-neutral-300 p-3 md:p-[90px]">
                <div
                  className="elementor-element elementor-element-c0dfd84 elementor-widget elementor-widget-pbmit_icon_heading"
                  data-id="c0dfd84"
                  data-element_type="widget"
                  data-widget_type="pbmit_icon_heading.default"
                >
                  <div className="elementor-widget-container">
                    <div className="pbmit-ihbox pbmit-ihbox-style-6">
                      <div className="pbmit-ihbox-wapper">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                              <i className="pbmit-cleanfin-icon pbmit-cleanfin-icon-exchange" />
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-ihbox-wapper-inner">
                          <h2 className="pbmit-element-title whitespace-nowrap">
                            Snowball Effect
                          </h2>
                        </div>
                      </div>
                      <div className="pbmit-ihbox-contents">
                        <div className="pbmit-heading-desc text-gray-900">
                          To use a baseball analogy, you don&apos;t always have
                          to hit a home run every time you go up to bat. You
                          really just want to get on first and keep moving
                          around the bases. Our software continuously executes
                          trades throughout the day to snowball profits.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="md:w-1/3 "
              data-id="af48edc"
              data-element_type="column"
              data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
            >
              <div className="border-r-[1px] border-neutral-300 p-3 md:p-[90px]">
                <div
                  className="elementor-element elementor-element-a6e4ef9 elementor-widget elementor-widget-pbmit_icon_heading"
                  data-id="a6e4ef9"
                  data-element_type="widget"
                  data-widget_type="pbmit_icon_heading.default"
                >
                  <div className="elementor-widget-container">
                    <div className="pbmit-ihbox pbmit-ihbox-style-6">
                      <div className="pbmit-ihbox-wapper">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                              <i className="pbmit-cleanfin-icon pbmit-cleanfin-icon-global-network" />
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-ihbox-wapper-inner">
                          <h2 className="pbmit-element-title whitespace-nowrap">
                            Fully Automated
                          </h2>
                        </div>
                      </div>
                      <div className="pbmit-ihbox-contents">
                        <div className="pbmit-heading-desc text-gray-900">
                          Most of our customers have little to zero trading
                          experience. The best part about our AI. algorithm is
                          that it is fully automated and executes trades in your
                          trading account all day.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="elementor-section elementor-top-section  pbmit-elementor-bg-color-globalcolor pbmit-text-color-white w-full py-12">
          <div className="mx-auto">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-14d341a pbmit-bg-color-over-image pbmit-bgimage-no pbmit-bgcolor-yes"
              data-id="14d341a"
              data-element_type="column"
              data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="mx-auto w-11/12 md:w-8/12">
                  <div className="elementor-container elementor-column-gap-no">
                    <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d21e89a pbmit-bg-color-over-image md:px-6"
                      data-id="d21e89a"
                      data-element_type="column"
                      data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-9e8a86b elementor-widget elementor-widget-pbmit_icon_heading"
                          data-id="9e8a86b"
                          data-element_type="widget"
                          data-widget_type="pbmit_icon_heading.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="pbmit-ihbox pbmit-ihbox-style-6">
                              <div className="pbmit-ihbox-wapper">
                                <div className="pbmit-ihbox-icon">
                                  <div className="pbmit-ihbox-icon-wrapper">
                                    <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                      <i className="pbmit-cleanfin-icon pbmit-cleanfin-icon-tick" />
                                    </div>
                                  </div>
                                </div>
                                <div className="pbmit-ihbox-wapper-inner">
                                  <h2 className="pbmit-element-title">
                                    This is FOR people:
                                  </h2>
                                </div>
                              </div>
                              <div className="pbmit-ihbox-contents"></div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-widget">
                          <div className="">
                            <ul className="elementor-icon-list-items text-2xl">
                              {[
                                `With at least $25k in capital looking for a
                                      high-impact, passive investment.`,
                                `Interested in leveraging a sophisticated AI
                                  Algo to enhance their investment returns.`,
                                `   Tailored for investors aiming for steady,
                                  attractive monthly earnings within this range.`,
                                `  Suitable for those prioritizing investments
                                  that offer reliability and the benefit of
                                  compounding over time.`,
                                `  Investors looking to broaden their investment
                                  horizon and add a unique, technologically
                                  advanced element to their portfolio.`,
                              ].map((x, i) => (
                                <li
                                  className="elementor-icon-list-item "
                                  key={i}
                                >
                                  <span className="">
                                    <i
                                      aria-hidden="true"
                                      className="mdi mdi-check"
                                    />{" "}
                                  </span>
                                  <span className="elementor-icon-list-text pb-2 pl-3 text-lg">
                                    {x}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4df0529 pbmit-bg-color-over-image md:border-l-[1px] md:border-neutral-700 md:px-6"
                      data-id="4df0529"
                      data-element_type="column"
                      data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated  ">
                        <div
                          className="elementor-element elementor-element-684deb7 elementor-widget elementor-widget-pbmit_icon_heading"
                          data-id="684deb7"
                          data-element_type="widget"
                          data-widget_type="pbmit_icon_heading.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="pbmit-ihbox pbmit-ihbox-style-6">
                              <div className="pbmit-ihbox-wapper">
                                <div className="pbmit-ihbox-icon">
                                  <div className="pbmit-ihbox-icon-wrapper">
                                    <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                      <i className="mdi mdi-clear" />
                                    </div>
                                  </div>
                                </div>
                                <div className="pbmit-ihbox-wapper-inner">
                                  <h2 className="pbmit-element-title">
                                    This is NOT FOR people:
                                  </h2>
                                </div>
                              </div>
                              <div className="pbmit-ihbox-contents"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element  elementor-widget "
                          data-id="0ff0985"
                          data-element_type="widget"
                          data-widget_type="icon-list.default"
                        >
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              {[
                                `    Individuals with less than $25k in liquid
                                  assets.`,
                                `Who prefer actively managing their trades and investments on a day-to-day basis.`,
                                `Investors seeking extremely high-risk, high-reward investment opportunities beyond the 3-10% monthly return range.`,
                                `Looking for quick, short-term gains, as this program focuses on steady, long-term growth.`,
                                `Who prefer creating and managing their investment strategies without external assistance or algorithms.`,
                              ].map((x, i) => (
                                <li
                                  className="elementor-icon-list-item "
                                  key={i}
                                >
                                  <span className="">
                                    <i
                                      aria-hidden="true"
                                      className="mdi mdi-clear"
                                    />{" "}
                                  </span>
                                  <span className="elementor-icon-list-text w-11/12 pb-2 pl-3 text-lg">
                                    {x}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-2c296c3 pbmit-btn-color-blackish pbmit-btn-hover-color-light pbmit-btn-style-outline pbmit-btn-shape-round elementor-align-center access elementor-widget elementor-widget-button mt-12"
                    data-id="2c296c3"
                    data-element_type="widget"
                    data-widget_type="button.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <button className="elementor-button elementor-button-link elementor-size-sm">
                          <span className="elementor-button-content-wrapper text-2xl">
                            <span className="elementor-button-icon elementor-align-icon-left text-white">
                              <i aria-hidden="true" className="mdi mdi-check" />{" "}
                            </span>
                            <span
                              className="elementor-button-text text-white "
                              onClick={showModal}
                            >
                              CLICK TO APPLY
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-25134c8 pbmit-col-stretched-none pbmit-cursor-color-blackish-color pbmit-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="25134c8"
                  data-element_type="section"
                  data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
                  data-cursor="blackish-color"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-99debd6 pbmit-bg-color-over-image"
                      data-id="99debd6"
                      data-element_type="column"
                      data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-9149205 pbmit-btn-color-blackish pbmit-btn-hover-color-light pbmit-btn-style-outline pbmit-btn-shape-round elementor-align-center access elementor-invisible elementor-widget elementor-widget-button"
                          data-id={9149205}
                          data-element_type="widget"
                          data-settings="{'_animation':'fadeInUp'}"
                          data-widget_type="button.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a
                                className="elementor-button elementor-button-link elementor-size-sm"
                                href="#"
                              >
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-icon elementor-align-icon-left">
                                    <i
                                      aria-hidden="true"
                                      className="mdi mdi-check"
                                    />{" "}
                                  </span>
                                  <span className="elementor-button-text">
                                    CLICK TO APPLY
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-abc8245 elementor-section-full_width elementor-section-stretched pbmit-col-stretched-none pbmit-cursor-color-blackish-color pbmit-bg-color-over-image elementor-section-height-default elementor-section-height-default pbmit-col-stretched-no pbmit-bgimage-no pbmit-bgcolor-yes"
          data-id="abc8245"
          data-element_type="section"
          data-settings="{'stretch_section':'section-stretched','background_background':'classic','premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
          data-cursor="blackish-color"
        >
          <div className="elementor-container elementor-column-gap-no bg-black">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-aca7fb9 pbmit-bg-color-over-image pbmit-bgimage-no pbmit-bgcolor-yes"
              data-id="aca7fb9"
              data-element_type="column"
              data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-cebc299 elementor-widget elementor-widget-pbmit_marquee_effect_element"
                  data-id="cebc299"
                  data-element_type="widget"
                  data-widget_type="pbmit_marquee_effect_element.default"
                >
                  <div className="elementor-widget-container">
                    <div
                      className="pbminfotech-element
                       pbminfotech-element-marquee-effect		pbmit-element-marquee-effect-style-1		pbmit-element-viewtype-row-column		pbmit-element-column-three		pbmit-element-sticky-carousel-false		pbmit-element-caroursel-dot-false		pbmit-infinite-scroll-no		pbmit-infinite-scroll-button-no				"
                      data-cpt="marquee-effect"
                      data-totalpagination={1}
                      data-style={1}
                      data-show={3}
                      data-columns={3}
                      data-loop="false"
                      data-autoplay="false"
                      data-center="false"
                      data-nav="false"
                      data-dots="false"
                      data-reverse="false"
                      data-autoplayspeed={1000}
                      data-margin=""
                    >
                      <div className="pbmit-element-inner">
                        <div className="pbmit-marquee-effect-section pbmit-marquee-effect-section-1">
                          <div className="pbmit-marquee-container swiper-container swiper-initialized swiper-horizontal swiper-pointer-events py-4">
                            <div
                              className="swiper-wrapper animate-infinite-scroll"
                              id="swiper-wrapper-7e481d94cbd52bf9"
                              aria-live="off"
                            >
                              <article
                                className="pbmit-ele pbmit-ele-marquee-effect pbmit-marquee-effect-style-1 swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={0}
                                role="group"
                                aria-label="1 / 4"
                              >
                                <div className="pbmit-tag-wrapper">
                                  <h2 className="pbmit-element-title ">
                                    Fully
                                  </h2>
                                </div>
                              </article>
                              <article
                                className="pbmit-ele pbmit-ele-marquee-effect pbmit-marquee-effect-style-1 swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={1}
                                role="group"
                                aria-label="2 / 4"
                              >
                                <div className="pbmit-tag-wrapper ">
                                  <h2 className="pbmit-element-title ">
                                    Automated
                                  </h2>
                                </div>
                              </article>
                              <article
                                className="pbmit-ele pbmit-ele-marquee-effect pbmit-marquee-effect-style-1 swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={2}
                                role="group"
                                aria-label="3 / 4"
                              >
                                <div className="pbmit-tag-wrapper">
                                  <h2 className="pbmit-element-title">
                                    Software
                                  </h2>
                                </div>
                              </article>
                              <article
                                className="pbmit-ele pbmit-ele-marquee-effect pbmit-marquee-effect-style-1 swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                                data-swiper-slide-index={3}
                                role="group"
                                aria-label="4 / 4"
                              >
                                <div className="pbmit-tag-wrapper">
                                  <h2 className="pbmit-element-title">
                                    Trading
                                  </h2>
                                </div>
                              </article>
                              <article
                                className="pbmit-ele pbmit-ele-marquee-effect pbmit-marquee-effect-style-1 swiper-slide swiper-slide-duplicate-active"
                                data-swiper-slide-index={0}
                                role="group"
                                aria-label="1 / 4"
                              >
                                <div className="pbmit-tag-wrapper">
                                  <h2 className="pbmit-element-title">Fully</h2>
                                </div>
                              </article>
                              <article
                                className="pbmit-ele pbmit-ele-marquee-effect pbmit-marquee-effect-style-1 swiper-slide swiper-slide-duplicate-next"
                                data-swiper-slide-index={1}
                                role="group"
                                aria-label="2 / 4"
                              >
                                <div className="pbmit-tag-wrapper">
                                  <h2 className="pbmit-element-title">
                                    Automated
                                  </h2>
                                </div>
                              </article>
                              <article
                                className="pbmit-ele pbmit-ele-marquee-effect pbmit-marquee-effect-style-1 swiper-slide"
                                data-swiper-slide-index={2}
                                role="group"
                                aria-label="3 / 4"
                              >
                                <div className="pbmit-tag-wrapper">
                                  <h2 className="pbmit-element-title">
                                    Software
                                  </h2>
                                </div>
                              </article>
                              <article
                                className="pbmit-ele pbmit-ele-marquee-effect pbmit-marquee-effect-style-1 swiper-slide swiper-slide-prev"
                                data-swiper-slide-index={3}
                                role="group"
                                aria-label="4 / 4"
                              >
                                <div className="pbmit-tag-wrapper">
                                  <h2 className="pbmit-element-title">
                                    Trading
                                  </h2>
                                </div>
                              </article>
                              <article
                                className="pbmit-ele pbmit-ele-marquee-effect pbmit-marquee-effect-style-1 swiper-slide swiper-slide-duplicate swiper-slide-active"
                                data-swiper-slide-index={0}
                                role="group"
                                aria-label="1 / 4"
                              >
                                <div className="pbmit-tag-wrapper">
                                  <h2 className="pbmit-element-title">Fully</h2>
                                </div>
                              </article>
                              <article
                                className="pbmit-ele pbmit-ele-marquee-effect pbmit-marquee-effect-style-1 swiper-slide swiper-slide-duplicate swiper-slide-next"
                                data-swiper-slide-index={1}
                                role="group"
                                aria-label="2 / 4"
                              >
                                <div className="pbmit-tag-wrapper">
                                  <h2 className="pbmit-element-title">
                                    Automated
                                  </h2>
                                </div>
                              </article>
                              <article
                                className="pbmit-ele pbmit-ele-marquee-effect pbmit-marquee-effect-style-1 swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={2}
                                role="group"
                                aria-label="3 / 4"
                              >
                                <div className="pbmit-tag-wrapper">
                                  <h2 className="pbmit-element-title">
                                    Software
                                  </h2>
                                </div>
                              </article>
                              <article
                                className="pbmit-ele pbmit-ele-marquee-effect pbmit-marquee-effect-style-1 swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                                data-swiper-slide-index={3}
                                role="group"
                                aria-label="4 / 4"
                              >
                                <div className="pbmit-tag-wrapper">
                                  <h2 className="pbmit-element-title">
                                    Trading
                                  </h2>
                                </div>
                              </article>
                            </div>
                            <span
                              className="swiper-notification"
                              aria-live="assertive"
                              aria-atomic="true"
                            />
                          </div>
                        </div>
                      </div>
                      {/* .pbmit-element-inner */}
                    </div>
                    {/* .pbminfotech-element */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="elementor-section elementor-top-section elementor-element elementor-element-19b5e053 pbmit-bg-color-yes pbmit-elementor-bg-color-globalcolor pbmit-text-color-white elementor-section-stretched pbmit-col-stretched-none pbmit-cursor-color-blackish-color pbmit-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default pbmit-col-stretched-no pbmit-bgimage-no pbmit-bgcolor-yes"
          data-id="19b5e053"
          data-element_type="section"
          data-settings="{'stretch_section':'section-stretched','premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
          data-cursor="blackish-color"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1056463f pbmit-bg-color-over-image pbmit-bgimage-no pbmit-bgcolor-yes"
              data-id="1056463f"
              data-element_type="column"
              data-settings="{'premium_particles_zindex':0,'premium_particles_responsive':['desktop','tablet','mobile']}"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-3b80573 pbmit-animation-none elementor-widget elementor-widget-image"
                  data-id="3b80573"
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container  w-full pt-3">
                    <img
                      src="logo.png"
                      className="mx-auto w-36"
                      alt=""
                      sizes="(max-width: 664px) 100vw, 664px"
                    />
                  </div>
                </div>

                <div className="elementor-widget-container mx-auto mt-0 w-10/12 pt-0 text-base">
                  <p>
                    Notice: This website is entirely independent and not
                    affiliated with, endorsed by, or connected to Facebook,
                    Instagram, or Meta, Inc. The term “FACEBOOK” is a registered
                    trademark of Meta, Inc. Additionally, FiNex Capital,
                    including its software and opportunities, expressly
                    disclaims any affiliation with or endorsement from
                    Instagram.
                  </p>
                  <p>IMPORTANT: Earnings and Legal Disclaimers</p>
                  <p>
                    *Any statements regarding earnings and income made by FN
                    Capital, in conjunction with their
                    advertisers/sponsors/members/owners, are presented as
                    aspirational and illustrative of potential earnings. Success
                    stories, testimonials, and examples provided are exceptional
                    and non-typical, and should not be construed as a guarantee
                    that users or others will achieve similar results.
                    Individual results vary and are contingent upon personal
                    capacity, work ethic, business expertise, experience,
                    motivation levels, the implementation of FiNex Capital
                    Programs, economic conditions, standard and unforeseen
                    business risks, and other influencing factors.
                  </p>
                  <p>
                    FiNex Capital, both as an entity and individually, assumes
                    no responsibility for the actions of users. Users bear sole
                    responsibility for their decisions, actions, and the
                    assessment and utilization of our products and services. It
                    is expressly agreed that FiNex Capital is not liable for any
                    outcomes resulting from the use of FiNex Capital Programs.
                    For a comprehensive disclaimer of liability and other
                    limitations, kindly refer to our Terms &amp; Conditions.
                  </p>
                  <p>
                    For inquiries regarding FiNex Capital Programs or to seek
                    clarification about their suitability for specific needs,
                    users are encouraged to contact us via email at
                    info@fncapital.io. We appreciate the opportunity to engage
                    in discussions about objectives and how the FiNex Capital
                    partnership program may contribute to users’ success.
                  </p>
                </div>

                {/* <div
                  className="elementor-element elementor-element-35a3c89 elementor-widget elementor-widget-text-editor"
                  data-id="35a3c89"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p style={{ textAlign: "center" }}>
                      <span style={{ color: "#ffffff" }}>
                        <a
                          style={{ color: "#ffffff" }}
                          href="https://fncapital.io/terms-of-service/"
                          target="_blank"
                          rel="noopener"
                        >
                          Terms of Service
                        </a>{" "}
                        |{" "}
                        <a
                          style={{ color: "#ffffff" }}
                          href="https://fncapital.io/privacy-policy/"
                          target="_blank"
                          rel="noopener"
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </p>
                    <p style={{ textAlign: "center" }}>
                      FiNex Capital . All Rights Reserved
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
