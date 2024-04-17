'use client'


import { Select, Space } from "antd";

const TZSelect = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <Select
        defaultValue="lucy"
        style={{ width: 150 }}
        onChange={handleChange}
        options={[
          { value: "White with Gold", label: "White with Gold" },
          { value: "Red", label: "Red" },
          { value: "Green", label: "Green" },
          { value: "Blue", label: "Blue" },
        ]}
      />
    </div>
  );
};

export default TZSelect;
