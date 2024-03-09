import CreatePostForm from "@/components/posts/CreatePostForm";
import ecllipse3 from "@/app/images/asset/ecllipse3.svg";
import ecllipse2 from "@/app/images/asset/Ellipse2.svg";
import ecllipse1 from "@/app/images/asset/ellipse1.svg";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/footer/Footer";

const CreatePost = () => {
  return (
    <div>
      <Navbar/>
      <div className=" relative flex pt-18 flex-col  lg:px-0 mb-14 ">
        <CreatePostForm />
      </div>
      <div className="pt-10">
      <Footer/>
      </div>
    </div>
  );
};

export default CreatePost;
