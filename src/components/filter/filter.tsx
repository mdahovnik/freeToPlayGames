import style from "./filter.module.css";
import { LayoutFilled, SearchOutlined, WindowsFilled } from "@ant-design/icons";
import { Button, Select, Space } from "antd";
import { FC } from "react";

const genreRange = [
  { value: "MMO", label: "MMO" },
  { value: "MMORPG", label: "MMORPG" },
  { value: "Shooter", label: "Shooter" },
  { value: "Strategy", label: "Strategy" },
  { value: "Card Games", label: "Card Games" },
  { value: "Racing", label: "Racing" },
  { value: "Sports", label: "Sports" },
  { value: "Social", label: "Social" },
  { value: "Fighting", label: "Fighting" },
];
const platformsRange = [
  {
    value: "Windows",
    label: (
      <span>
        <WindowsFilled />
        &nbsp;Windows
      </span>
    ),
  },
  {
    value: "Browser",
    label: (
      <span>
        <LayoutFilled />
        &nbsp;Browser
      </span>
    ),
  },
  { value: "All Platforms", label: "All Platforms" },
];
const sortTypeRange = [
  { value: "Relevance", label: "Relevance" },
  { value: "Popularity", label: "Popularity" },
  { value: "Release Date", label: "Release Date" },
  { value: "Alphabetical", label: "Alphabetical" },
];

function handleChange() {}

export const Filter: FC = () => {
  return (
    <Space
      size={"middle"}
      style={{ marginTop: 100, lineHeight: "normal", alignSelf: "center" }}>
      <div>
        <span className={style.selectLabel}>Platform:</span>
        <Select
          defaultValue="All Platforms"
          variant={"borderless"}
          onChange={handleChange}
          options={platformsRange}
        />
      </div>
      <div>
        <span className={style.selectLabel}>Genre:</span>
        <Select
          defaultValue="Shooter"
          variant={"borderless"}
          options={genreRange}
        />
      </div>
      <div>
        <span className={style.selectLabel}>Sort By:</span>
        <Select
          defaultValue="Relevance"
          variant={"borderless"}
          options={sortTypeRange}
        />
      </div>
      <Button color="default" variant="text" icon={<SearchOutlined />}>
        apply filters
      </Button>
    </Space>
  );
};
