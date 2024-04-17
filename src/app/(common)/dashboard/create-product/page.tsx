'use client'


import {  FaCloudUploadAlt } from "react-icons/fa";


import { FieldValues, useForm } from "react-hook-form";
import { useCreateProductMutation } from "@/redux/feature/productsApi";


const img_hosting_token = process.env.IMAGE_UPLOAD_TOKEN;

const CreateProduct = () => {
const [createProduct, data] = useCreateProductMutation()
 console.log(data)

  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;


  const onSubmit = (data: FieldValues) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.url;
        const { title, name, description, } = data;
        const productData = {
          title,
          image: imageUrl,
          name,
          description,
        };
        console.log(productData)
        createProduct(productData);
        reset();
      })

      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section>
      <div className="addDonationWraps">
        <div className="addDonationWrap">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                {...register("name", { required: true })}
                name="name"
                className="donationFields"
              />

              <input
                {...register("title", { required: true })}
                name="title"
                type="text"
                className="donationFields"
              />
              <div className="donationFields">
                <input
                  {...register("image", { required: true })}
                  name="image"
                  type="file"
                  id="files"
                  className="hidden"
                />
                <label
                  htmlFor="files"
                  className="flex items-center justify-center cursor-pointer bg-[#42A1DA] text-white py-2 rounded-md "
                >
                  <span>
                    <FaCloudUploadAlt size={30} className="mr-2" />
                  </span>
                  Upload Image
                </label>
              </div>
              <textarea
                {...register("description", { required: true })}
                name="description"
                className=" border w-full h-[160px] mt-5 border-[#ddd] resize-none rounded-md "
              ></textarea>
            </div>
            <div className="mt-2 savebtn">
              <button>Add Testimonial </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateProduct;
