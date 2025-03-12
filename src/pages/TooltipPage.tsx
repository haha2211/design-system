import React from "react";
import Tooltip from "../components/Tooltip/Tooltip";

const TooltipPage: React.FC = () => {
  return (
    <div>
      <h1>Accordion 컴포넌트</h1>
      <Tooltip title="자세히 보기">여기에 상세 내용을 넣을 수 있습니다.</Tooltip>
    </div>
  );
};

export default TooltipPage;
