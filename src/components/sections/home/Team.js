import Image from "next/image";
import Link from "next/link"

const Team = () => {
  return (
  <>

  <section className="team_section section_space_lg">
    <div className="container">
      <div className="section_title text-center">
        <h2 className="title_text mb-0"><span className="sub_title">Pet Care Team</span> Welcome To Our Family</h2>
      </div>

      <div className="row justify-content-center">
        <div className="col col-lg-3 col-md-6 col-sm-6">
          <div className="team_item text-center">
            <div className="item_image">
            <Image src="/images/team/team_img_1.png" alt="Team Image"/>
            </div>
            <div className="item_content">
              <h3 className="item_title">Cameron Rogers</h3>
              <span className="item_designation">President & CEO</span>
              <ul className="social_links unorder_list">
                <li><Link href="#!"><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link href="#!"><i className="fab fa-instagram"></i></Link></li>
                <li><Link href="#!"><i className="fab fa-twitter"></i></Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col col-lg-3 col-md-6 col-sm-6">
          <div className="team_item text-center">
            <div className="item_image">
            <Image src="/images/team/team_img_2.png" alt="Team Image"/>
            </div>
            <div className="item_content">
              <h3 className="item_title">Irene Sotelo</h3>
              <span className="item_designation">President & CEO</span>
              <ul className="social_links unorder_list">
                <li><Link href="#!"><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link href="#!"><i className="fab fa-instagram"></i></Link></li>
                <li><Link href="#!"><i className="fab fa-twitter"></i></Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col col-lg-3 col-md-6 col-sm-6">
          <div className="team_item text-center">
            <div className="item_image">
            <Image src="/images/team/team_img_3.png" alt="Team Image"/>
            </div>
            <div className="item_content">
              <h3 className="item_title">Cameron Rogers</h3>
              <span className="item_designation">President & CEO</span>
              <ul className="social_links unorder_list">
                <li><Link href="#!"><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link href="#!"><i className="fab fa-instagram"></i></Link></li>
                <li><Link href="#!"><i className="fab fa-twitter"></i></Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col col-lg-3 col-md-6 col-sm-6">
          <div className="team_item text-center">
            <div className="item_image">
            <Image src="/images/team/team_img_4.png" alt="Team Image"/>
            </div>
            <div className="item_content">
              <h3 className="item_title">Tiontay Carroll</h3>
              <span className="item_designation">President & CEO</span>
              <ul className="social_links unorder_list">
                <li><Link href="#!"><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link href="#!"><i className="fab fa-instagram"></i></Link></li>
                <li><Link href="#!"><i className="fab fa-twitter"></i></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link className="btn btn_primary" href="/services"><i className="fas fa-paw"></i> Our Team</Link>
      </div>

    </div>
  </section>

  </>
  );
};
export default Team
