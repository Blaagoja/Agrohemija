import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { projectsSliderOne } from "../src/sliderProps";
const PortfolioDetails = () => {
  return (
    <Layout>
      <PageBanner pageTitle={"Portfolio"} pageName=" Portfolio Details" />
      <section className="project-details-page pt-170 wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-details-wrapper">
                <div className="img-holder mb-50">
                  <img
                    src="assets/images/portfolio/single-portfolio-1.jpg"
                    alt=""
                  />
                </div>
                <div className="project-content pb-75">
                  <div className="content-box">
                    <div className="row">
                      <div className="col-lg-5">
                        <h3 className="title mb-15"> ALGA 600 </h3>
                      </div>
                      <div className="col-lg-7">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="project-info-box mb-45">
                              <h4 className="mb-10">Category</h4>
                              <p>Organic Foods Vegetables</p>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="project-info-box mb-45">
                              <h4 className="mb-10">Clients</h4>
                              <p>Microsoft LTS Washington</p>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="project-info-box mb-45">
                              <h4 className="mb-10">Date</h4>
                              <p>25 February 2022</p>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <p>
                            ALGA 600 е органско ѓубриво со екстракт од морски алги, кој е биолошки стимулатор и физиолошки регулатор.
                            Растворлив прашок екстракт од морски алги сертифициран од IMO и ECOCCERT. Високо балансирана комбинација од диви морски плевели: Sargassum spp.(богата со алгична киселина и хормони) и Laminaria spp.(богата со минерали, витамини и амино киселини). Висока содржина на природни регулатори за растење и балансиран спектар на хранливи материи. Уникатна молекулска структура, која овозможува брзо да се раствара во вода без да се таложи.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="row">
                      <div className="col-lg-5">
                        <h3 className="title mb-15">Начин на употреба:</h3>
                      </div>
                      <div className="col-lg-7">
                        <div className="content">
                          Може да се комбинира со други ѓубрива и производи за заштита на растенијата.
                          Доза на примена е 1 kg/ha.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-navigation border-top-1 pt-80">
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="post-navigation-item prev-navigation d-flex align-items-center">
                        <div className="thumb">
                          <img
                            src="assets/images/portfolio/prev-nav.jpg"
                            alt=""
                          />
                        </div>
                        <div className="text">
                          <h4>
                            <Link href="/portfolio-details">
                              <a>Organic Vegetables</a>
                            </Link>
                          </h4>
                          <p>
                            <a href="#">Food</a>, <a href="#">Organic</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="post-navigation-icon text-center">
                        <img src="assets/images/bar.png" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="post-navigation-item next-navigation d-flex align-items-center">
                        <div className="thumb">
                          <img
                            src="assets/images/portfolio/next-nav.jpg"
                            alt=""
                          />
                        </div>
                        <div className="text">
                          <h4>
                            <Link href="/portfolio-details">
                              <a>Organic Cows</a>
                            </Link>
                          </h4>
                          <p>
                            <a href="#">Food</a>, <a href="#">Organic</a>
                          </p>
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
      {/*====== End Portfolio Details ======*/}
      {/*====== Start Gallery Section ======*/}
      <section className="projects-section pt-130 pb-130 p-r z-1">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8 col-md-9">
              <div className="section-title section-title-left mb-60 wow fadeInLeft">
                <span className="sub-title">Project Gallery</span>
                <h2>
                  We’ve Done Many Other Projects Let’s See Gallery Insights
                </h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-3">
              <div className="project-arrows mb-60 float-md-right wow fadeInRight" />
            </div>
          </div>
          <Slider {...projectsSliderOne} className="projects-slider-one">
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/portfolio/img-1.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title">
                      <Link href="/portfolio-details">
                        <a>Golder Wheat</a>
                      </Link>
                    </h3>
                    <p>
                      <a href="#">Agriculture</a>,<a href="#">Foods</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item wow fadeInDown">
              <div className="img-holder">
                <img
                  src="assets/images/portfolio/img-2.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title">
                      <Link href="/portfolio-details">
                        <a>Golder Wheat</a>
                      </Link>
                    </h3>
                    <p>
                      <a href="#">Agriculture</a>,<a href="#">Foods</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/portfolio/img-3.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title">
                      <Link href="/portfolio-details">
                        <a>Golder Wheat</a>
                      </Link>
                    </h3>
                    <p>
                      <a href="#">Agriculture</a>,<a href="#">Foods</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item wow fadeInDown">
              <div className="img-holder">
                <img
                  src="assets/images/portfolio/img-2.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title">
                      <Link href="/portfolio-details">
                        <a>Golder Wheat</a>
                      </Link>
                    </h3>
                    <p>
                      <a href="#">Agriculture</a>,<a href="#">Foods</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/portfolio/img-3.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title">
                      <Link href="/portfolio-details">
                        <a>Golder Wheat</a>
                      </Link>
                    </h3>
                    <p>
                      <a href="#">Agriculture</a>,<a href="#">Foods</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>{" "}
    </Layout>
  );
};
export default PortfolioDetails;
