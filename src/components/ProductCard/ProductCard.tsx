'use client'


import { Card, Checkbox, CheckboxProps } from "antd";
import { BiMinus } from "react-icons/bi";
const ProductCard = () => {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  

  return (
    <div>
      <div className="flex flex-wrap justify-between lg:block space-y-0 lg:space-y-5 gap-3 ">
        <Card className="card">
          <h4 className="text-xl font-semibold">Price Range </h4>
          <div className="space-y-3 mt-3">
            <div className="flex items-center">
              <Checkbox onChange={onChange} />
              <p className="flex items-center ml-4 ">
                $200.00 <BiMinus /> $500{" "}
              </p>
            </div>
            <div className="flex items-center">
              <Checkbox onChange={onChange} />
              <p className="flex items-center ml-4 ">
                $200.00 <BiMinus /> $500{" "}
              </p>
            </div>
            <div className="flex items-center">
              <Checkbox onChange={onChange} />
              <p className="flex items-center ml-4 ">
                $200.00 <BiMinus /> $500{" "}
              </p>
            </div>
            <div className="flex items-center">
              <Checkbox onChange={onChange} />
              <p className="flex items-center ml-4 ">
                $200.00 <BiMinus /> $500{" "}
              </p>
            </div>
            <div className="flex items-center">
              <Checkbox onChange={onChange} />
              <p className="flex items-center ml-4 ">
                $200.00 <BiMinus /> $500{" "}
              </p>
            </div>
          </div>
        </Card>
        <Card className="card">
          <h4 className="text-xl font-semibold">Categories / Brands </h4>
          <div className="space-y-3 mt-3">
            <div className="flex items-center">
              <Checkbox onChange={onChange} />
              <p className="flex items-center ml-4 "> Apple </p>
            </div>
            <div className="flex items-center">
              <Checkbox onChange={onChange} />

              <p className="flex items-center ml-4 ">Samsung </p>
            </div>
            <div className="flex items-center">
              <Checkbox onChange={onChange} />
              <p className="flex items-center ml-4 ">Huawei </p>
            </div>
            <div className="flex items-center">
              <Checkbox onChange={onChange} />
              <p className="flex items-center ml-4 ">Xiaomi </p>
            </div>
            <div className="flex items-center">
              <Checkbox onChange={onChange} />
              <p className="flex items-center ml-4 ">OnePlus </p>
            </div>
            <div className="flex items-center">
              <Checkbox onChange={onChange} />
              <p className="flex items-center ml-4 ">Google (Pixel) </p>
            </div>
            <div className="flex items-center">
              <Checkbox onChange={onChange} />
              <p className="flex items-center ml-4 ">Oppo </p>
            </div>

            <div className="flex items-center">
              <Checkbox onChange={onChange} />
              <p className="flex items-center ml-4 ">Vivo </p>
            </div>
          </div>
        </Card>
        <Card className="card">
          <h4 className="text-xl font-semibold">Ratings </h4>
          <div className="space-y-3 mt-3">
            <div className="flex items-center">
              <Checkbox onChange={onChange} />
              <p className="flex items-center ml-4 ">1Star </p>
            </div>
            <div className="flex items-center">
              <Checkbox onChange={onChange} />
              <p className="flex items-center ml-4 ">2Star </p>
            </div>
            <div className="flex items-center">
              <Checkbox onChange={onChange} />
              <p className="flex items-center ml-4 ">3Star </p>
            </div>
            <div className="flex items-center">
              <Checkbox onChange={onChange} />
              <p className="flex items-center ml-4 ">4Star </p>
            </div>
            <div className="flex items-center">
              <Checkbox onChange={onChange} />
              <p className="flex items-center ml-4 ">5Star </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductCard;
