import Section from "../../../components/Section/Section";
import BlogIn from "../../../components/BlogIn/BlogIn";
import Aside from "../../../components/Aside/Aside";
import inspirationImg from "../../../assets/images/blog-img-1.jpg";
import picLeft1 from "../../../assets/images/blog-content-pic.jpg";
import picLeft2 from "../../../assets/images/blog-content-pic1.jpg";
import picRight1 from "../../../assets/images/blog-content-pic2.jpg";
import picRight2 from "../../../assets/images/blog-content-pic3.jpg";
import blogPic from "../../../assets/images/blog-content-img-1.jpg";
import blogPic2 from "../../../assets/images/blog-content-img-2.jpg";
import blogPic3 from "../../../assets/images/blog-content-img-3.jpg";
import blogPic4 from "../../../assets/images/blog-content-img-4.jpg";
import blogPic5 from "../../../assets/images/blog-content-img-5.jpg";
import blogPic6 from "../../../assets/images/blog-content-img-6.jpg";
import ShareButton from "../../../components/ShareButton/ShareButton";
import authorImg from "../../../assets/images/author2.jpg";

import "./single-blog.scss";
import Image from "../../../components/Image/Image";
import { Link } from "react-router-dom";
import PostNav from "../../../components/PostNav/PostNav";
import Author from "../../../components/Author/Author";
import Comments from "../../../components/Comments/Comments";
import Reply from "../../../components/Reply/Reply";

const SingleBlog = () => {
  return (
    <Section className={"single-blog"}>
      <div className="single-blog-div">
        <BlogIn
          name={"Inspiration"}
          title={"Ready for a getaway weekend"}
          date={"March 1, 2021"}
          author={"By Katherine Bishop"}
          src={inspirationImg}
          content={`Kaccum san pericula usu an, in pri dolorum denique. Cu movet debitis cum. Vix paulo evertitur cu, conceptam constituam te his, meis euismod sed ad. Partem suscipit cu cum. Vix no prodesset complectitur conclud aturque, dicam perfecto eu per, ne vis eleifend expetenda. Idque petentium laboramus mea id, mei at minim labores. Tollit ullamcorper ius cu, eos malis clita luptatum ei, vix ullum forensibus an. Esse option singulis id nec, nam eruditi ornatus at. Eam soluta dicunt cu. Est ad oporteat appellantur, per dicta pertinax cu. Iusto quando conceptam vim ad, an sed explicari appellantur. Augue utamur lobortis vim ne.`}
        />
        <div className="float-div">
          <div className="aspect-ratio-box">
            <Image className={"float-div-pic"} src={blogPic} />
          </div>
          <div className="float-div-content">
            <p>
              Semper ultricies nisi vel augue blandit vel, luctus proin pulvinar
              del. Aenean sollicitudin, lorem auci elit del con sequat
              ipsutissem ut niuis sed odio cursus.
            </p>
            <span>
              Venenatis faucibus. Nullam co ante. Curabitur ullam qur per ultri
              vitae nisi etiam sit amet. Orci eget eros sapien ut libero?
            </span>
            <p>
              Nam eget dui. Phasellus viverra nulla ut metus varius laoreet.
              Etiam rhoncus. Lorem ipsum gravida nibh vel velit auctor aliquet.
              Maecenas tempus, tellus eget condimen rhoncus, sem quam semper
              libero, sit amet sed ipsum. Curabitur ullamcorper ultricies nisi.
              Donec vitae sapien libero venenatis faucibus amet. Tempus dolerus
              ictis deli vitae sapien ut libero?
            </p>
          </div>
        </div>
        <p>
          Cum socis theme sed natoque ut penatibus. Etiam ultricies nisi vel
          augue. Cura bitur tincidunt ultricies dictum felis eu pede sit. Etiam
          rhoncus. Tempus, tellus eget condimentum rhoncus, sem quam semper
          libero, amet et sem adipiscing sem neque nula ipsum. Etiam ultricies
          nisi vel augue blandit vel, luctus pulvinar.
        </p>
        <Image className={"single-pic"} src={blogPic2} />
        <p>
          Aenean sollicitudin, lorem auci elit consequat ipsutissem niuis sed
          odio sit amet vulputate cursus nibh a sit amet ullamcorper. Curabitur
          ultricies nisi. Nam eget dui. Cum socis Theme sed natoque penatibus.
          Etiam ultricies nisi vel augue. Cura bitur et ullamcorper ultricies
          dictum felis eu pede sit. Etiam rhoncus. Maecenas tempus, tellus
          condimentum rhoncus, sem quam semper libero, amet et adipiscing sem
          neque nula ipsum. Cum socis Theme sed natoque ut penatibus. Etiam
          ultricies nisi vel augue. Cura bitur tincidunt ultricies.
        </p>
        <div className="picture-div">
          <div className="picture-left">
            <div className="picture-left-top">
              <Image className={"picture-left-top-img"} src={picLeft1} />
              <p>Women's sunglasses by Joe</p>
            </div>
            <div className="picture-left-bottom">
              <div className="picture-left-bottom-in">
                <Image className={"picture-left-bottom-img"} src={picLeft2} />
                <p>Beauty & makeup</p>
              </div>
            </div>
          </div>
          <div className="picture-right">
            <div className="picture-right-top">
              <Image className={"picture-right-top-img"} src={picRight1} />
              <p>Women's clutch by Joe</p>
            </div>
            <div className="picture-right-bottom">
              <Image className={"picture-right-bottom-img"} src={picRight2} />
              <p>Inspiration & style</p>
            </div>
          </div>
        </div>
        <p>
          Rollit ullamcorper ius cu, eos malis clita luptatum ei, vix ullum
          forensibus an. Esse option singulis id nec, nam eruditi ornatus at.
          Eam soluta dicunt cu. Est ad oporteat appellantur, per dicta pertinax
          cu. Iusto quando conceptam vim ad, an sed explicari appellantur.
          Accumsan pericula usu an, in pri dolorum denique. Cu movet debitis
          cum. Vix paulo evertitur cu, conceptam constituam te his, meis euismod
          sed ad. Partem suscipit cu cum. Vix no prodesset complectitur
          concludaturque, dicam perfecto eu per, ne vis eleifend expetenda.
          Idque petentium laboramus mea id, mei at minim labores. Quaestio
          omittantur id usu. Pri ei facilis definitionem. Meis moderatius
          consectetuer nam an, populo praesent mea in, euismod dissentiet
          definitionem.
        </p>
        <Image className={"single-pic2"} src={blogPic3} />
        <p className="desc-p">
          Accumsan pericula usu an, in pri dolorum denique. Cu movet debitis
          cum. Vix paulo evertitur cu, conceptam constituam te his, meis euismod
          sed ad. Partem suscipit cu cum. Vix no prodesset complectitur
          concludaturque, dicam perfecto eu per, ne vis eleifend expetenda. Pa
          sea dicta dicant equidem, est cu errem libris. Eu eos inani urbanitas,
          pertinax sadipscing per.
        </p>
        <p>
          Eam soluta dicunt cu. Est ad oporteat appellantur, per dicta pertinax
          cu. Iusto quando conceptam vim ad, an sed explicari appellantur.
          Accumsan pericula usu an, in pri dolorum denique. Cu movet debitis
          cum. Vix paulo evertitur cu, conceptam constituam te his, meis euismod
          sed ad. Partem suscipit cu cum. Vix no prodesset complectitur
          concludaturque, dicam perfecto eu per, ne vis eleifend expetenda.
          Idque petentium laboramus mea id, mei at minim labores. Quaestio
          omittantur id usu. Pri ei facilis definitionem. Meis moderatius
          consectetuer nam an, populo praesent mea in, euismod dissentiet
          definitionem quo ne.
        </p>
        <div className="three-pic-div">
          <Image className={"three-pic"} src={blogPic4} />
          <Image className={"three-pic"} src={blogPic5} />
          <Image className={"three-pic"} src={blogPic6} />
        </div>
        <ul className="single-blog-list">
          <li>
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
          </li>
          <li>
            Donec sodales magna. Sed consequat, bibendum sodales, augue velit
          </li>
          <li>
            Cum sociis theme natoque penatibus et magnis dis parturient montes
          </li>
        </ul>
        <p>
          Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
          libero, amet et adipiscing sem neque nula ipsum. Etiam ultricies nisi
          vel augue. Lorem ipsum dolor sit amet, consectetu adipiscing elit.
          Aenean commodo ligula eget dolor. Cum socis Theme sed natoque ut
          penatibus. Etiam ultricies nisi vel augue. Cura bitur tincidunt
          ultricies dictum felis eu pede sit. Etiam rhoncus. Sem quam semper
          libero, amet et adipiscing sem neque nula ipsum. Etiam ultricies nisi
          vel augue blandit vel, luctus pulvinar.
        </p>
        <div className="single-post-btn-div">
          <Link className="single-post-magazine-btn" to={""}>
            Magazine
          </Link>
          <ShareButton />
        </div>
        <div className="post-nav-div">
          <Link className="post-nav-link post-nav-prev" to={""}>
            <PostNav
              className="post-nav-content"
              title="Previous post"
              desc="Brand new designs"
            />
          </Link>
          <Link className="post-nav-link post-nav-next" to={""}>
            <PostNav
              className="post-nav-content"
              title="Next post"
              desc="Inspiring quotes from fashion designers
"
            />
          </Link>
        </div>
        <Author
          src={authorImg}
          title={"Blogger"}
          name={"Katherine Bishop"}
          desc={
            "Welcome to my blog where I share my lifestyle tips, healthy snack ideas and my opinions on the latest fashion trends. Keep up with my daily life."
          }
        />
        <Comments />
        <Reply />
      </div>

      <Aside />
    </Section>
  );
};
export default SingleBlog;
