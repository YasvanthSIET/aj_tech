import React from "react";
import ad from './assets/ad.jpg';
import ad1 from './assets/ad1.jpg';
import ad2 from './assets/ad2.jpg';
import ad3 from './assets/ad3.jpg';
import ad4 from './assets/ad4.jpg';
import ad5 from './assets/ad5.jpg';

const Ads = () => {
    return(
        <div className="ads container-fluid">
            <div className="row mt-3">
                <div className="col-md-5 p-4">
                    <img src={ad} alt="img-0" width="100%" height="100%"/>
                </div>
                <div className="col-md-7 px-5">
                    <h1>ADVERTISEMENT MAKING AND DESIGNING</h1>
                    <p>Our advertisement-making and designing services seize your audience's attention with captivating stories, transformative visuals, and professional post-production, elevating your brand to new heights. , we offer a wide range of services to enhance your brand.</p>
                    <p>From captivating voice-overs to catchy jingles and eye-catching flex prints, we have the expertise to elevate your business to the potential audience. By understanding your brand and target audience, we will create a concept that aligns with your objectives and resonates with your viewers.</p>
                </div>
            </div>
            
            <h1 className="text-center my-4">Our Services</h1>
            <div className="row mx-4">
                <div className="col col-md-6 col-lg-4 text-center">
                    <div className="content">
                        <img src={ad1} alt="img-1" width="200px" height="200px"/>
                        <h1>CINEMATIC VIDEO SHOOT</h1>
                        <p className="para">Our experienced team of videographers and cinematographers is dedicated to capturing your vision and bringing it to life on the screen. We have the skills and expertise to deliver high-quality results that exceed your expectations. We use state-of-the-art equipment and techniques to ensure that every shot is visually stunning and impactful.</p>
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#modal1">See More</button>
                    </div>
                </div>
                <div className="col col-md-6 col-lg-4 text-center">
                    <div className="content">
                        <img src={ad2} alt="img-2" width="200px" height="200px"/>
                        <h1>CGI GRAPHICS AND VFX</h1>
                        <p className="para">With our CGI graphics and VFX services, we can turn your imaginations into visually stunning realities. Our experienced team of artists and animators are well-versed in the latest CGI techniques, allowing us to create jaw-dropping graphics and seamless visual effects that elevate your brand advertisement to the next level. Whether you need realistic 3D models, product visualizations, or virtual environments, we can bring your vision to life with our photorealistic CGI capabilities.</p>
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#modal2">See More</button>
                    </div>
                </div>
                <div className="col col-md-6 col-lg-4 text-center">
                    <div className="content">
                        <img src={ad3} alt="img-3" width="200px" height="200px"/>
                        <h1>POST-PRODUCTION</h1>
                        <p className="para">At AJ InfoTeck , we understand the importance of post-production in creating a professional video. Our post-production services encompass everything from video editing and color grading to audio mixing and final touches. We strive to deliver a final product that not only meets but exceeds your expectations.Our post-production services encompass everything from video editing and color grading to sound design and final mastering. We understand the importance of engaging your audience. With our attention to detail and creative approach, we ensure that your videos are polished and professional, leaving an enduring impact on viewers.</p>
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#modal3">See More</button>
                    </div>
                </div>
                <div className="col col-md-6 col-lg-4 text-center">
                    <div className="content">
                        <img src={ad4} alt="img-4" width="200px" height="200px"/>
                        <h1>VOICE-OVER</h1>
                        <p className="para">Fascinate your viewers with professional voice-over narration that adds depth. Our voice-over artists are skilled at delivering a wide range of styles and tones, ensuring that your message is conveyed effectively and convincingly.To add an impressive voice to your videos, we provide top-notch voice-over services. Our talented voice-over artists offer a diverse range of styles and accents to suit your project's requirements. Whether you need a voice-over for a corporate, commercial, or narration, we will help you find the perfect voice that resonates with your target audience.</p>
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#modal4">See More</button>
                    </div>
                </div>
                <div className="col col-md-6 col-lg-4 text-center">
                    <div className="content">
                        <img src={ad5} alt="img-5" width="200px" height="200px"/>
                        <h1>JINGLES AND FLEX PRINT</h1>
                        <p className="para">A memorable jingle can make your brand stand out from your audience. Our team of talented technicians creates catchy and original jingles that reflect your brand's personality.Make your brand memorable with jingles and soundtracks that resonate with your audience. Create a visual impact with our high-quality flex prints. Whether it's banners, posters, or other promotional materials which are durable, vibrant, and designed to attract attention. With our attention to detail and commitment to quality, you can rest assured that your brand will be represented in the best possible light .</p>
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#modal5">See More</button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div class="modal fade" id="modal1">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">CINEMATIC VIDEO SHOOT</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body pt-0">
                            <img src={ad1} alt="image1" width="150px" height="150px" className="mx-auto d-block"/>
                            <p>Our experienced team of videographers and cinematographers is dedicated to capturing your vision and bringing it to life on the screen. We have the skills and expertise to deliver high-quality results that exceed your expectations. We use state-of-the-art equipment and techniques to ensure that every shot is visually stunning and impactful.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal fade" id="modal2">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">CGI GRAPHICS AND VFX</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body pt-0">
                            <img src={ad2} alt="image2" width="150px" height="150px" className="mx-auto d-block"/>
                            <p>With our CGI graphics and VFX services, we can turn your imaginations into visually stunning realities. Our experienced team of artists and animators are well-versed in the latest CGI techniques, allowing us to create jaw-dropping graphics and seamless visual effects that elevate your brand advertisement to the next level. Whether you need realistic 3D models, product visualizations, or virtual environments, we can bring your vision to life with our photorealistic CGI capabilities.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal fade" id="modal3">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">POST-PRODUCTION</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body pt-0">
                            <img src={ad3} alt="image3" width="150px" height="150px" className="mx-auto d-block"/>
                            <p>At AJ InfoTeck , we understand the importance of post-production in creating a professional video. Our post-production services encompass everything from video editing and color grading to audio mixing and final touches. We strive to deliver a final product that not only meets but exceeds your expectations.Our post-production services encompass everything from video editing and color grading to sound design and final mastering. We understand the importance of engaging your audience. With our attention to detail and creative approach, we ensure that your videos are polished and professional, leaving an enduring impact on viewers</p>
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal fade" id="modal4">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">VOICE-OVER</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body pt-0">
                            <img src={ad4} alt="image4" width="150px" height="150px" className="mx-auto d-block"/>
                            <p>Fascinate your viewers with professional voice-over narration that adds depth. Our voice-over artists are skilled at delivering a wide range of styles and tones, ensuring that your message is conveyed effectively and convincingly.To add an impressive voice to your videos, we provide top-notch voice-over services. Our talented voice-over artists offer a diverse range of styles and accents to suit your project's requirements. Whether you need a voice-over for a corporate, commercial, or narration, we will help you find the perfect voice that resonates with your target audience.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal fade" id="modal5">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">JINGLES AND FLEX PRINT</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body pt-0">
                            <img src={ad5} alt="image5" width="150px" height="150px" className="mx-auto d-block"/>
                            <p>A memorable jingle can make your brand stand out from your audience. Our team of talented technicians creates catchy and original jingles that reflect your brand's personality.Make your brand memorable with jingles and soundtracks that resonate with your audience. Create a visual impact with our high-quality flex prints. Whether it's banners, posters, or other promotional materials which are durable, vibrant, and designed to attract attention. With our attention to detail and commitment to quality, you can rest assured that your brand will be represented in the best possible light .</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ads;