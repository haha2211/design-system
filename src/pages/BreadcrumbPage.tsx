import React from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import styles from "../components/Breadcrumb/Breadcrumb.module.scss";

const BadgePage: React.FC = () => {
  return (
    <div>
      <h2>Breadcrumb</h2>
      <div>
        <ul>
          <li className="cont_wrap">
            <h4>Anatomy</h4>
            <div className="cont">
              <div>
                <img src="../public/images/components/Breadcrumb_Anatomy.png" alt="Breadcrumb Anatomy" style={{ maxWidth: "25rem"}} />
              </div>
              <ol>
                <li>1. Container</li>
                <li>2. Label</li>
                <li>3. Truncate</li>
                <li>4. Divider</li>
              </ol>
            </div>
          </li>
          <li className="cont_wrap">
            <h4>Style Guide</h4>
            <div>
              <h5>Size</h5>
              <ul className="cont flex_ac">
                <li className="cont_list">

                  <p>Small</p>
                </li>
                <li className="cont_list">

                  <p>Medium</p>
                </li>
                <li className="cont_list">

                  <p>Large</p>
                </li>
              </ul>
            </div>
            <div>
              <h5>Shape</h5>
              <ul className="cont flex_ac">
                <li className="cont_list">

                  <p>Square (default)</p>
                </li>
                <li className="cont_list">

                  <p>Rounded</p>
                </li>
              </ul>
            </div>
            <div>
              <h5>Type</h5>
              <ul className="cont flex_ac">
                <li className="cont_list">

                  <p>With Label</p>
                </li>
                <li className="cont_list">

                  <p>Without Label</p>
                </li>
                <li className="cont_list">

                  <p>Without Icon</p>
                </li>
              </ul>
            </div>
            <div>
              <h5>Status</h5>
              <ul className="cont flex_ac">
                <li className="cont_list">

                  <p>Positive (긍정적 상태): 승인, 완료, 성공, 신규, 구매, 라이선스 (녹색)</p>
                </li>
                <li className="cont_list">

                  <p>Informative (정보 제공): 활성, 사용 중, 라이브, 게시 (파란색)</p>
                </li>
                <li className="cont_list">

                  <p>Negative (부정적 상태): 오류, 경고, 거부, 실패 (빨간색)</p>
                </li>
                <li className="cont_list">

                  <p>Neutral (중립적 상태): 보관, 삭제, 일시 중지, 시작되지 않음, 종료 (주황색)</p>
                </li>
              </ul>
            </div>
          </li>
          <li className="cont_wrap">
            <h4>Behavior</h4>
            <ul>
                <li>클릭 가능 배지(Clickable Badge)는 버튼처럼 동작하며, 특정 페이지로 이동할 수 있음</li>
                <li>호버시 강조 효과를 적용하여 인터랙션 가능성을 제공</li>
                <li>아이콘 포함 배지는 추가적인 정보를 나타낼 수 있음</li>
              </ul>
          </li>
          <li className={styles.cont_wrap}>
            <h4>Accessibility</h4>
              <ul>
                <li>aria-label 또는 aria-labelledby 속성을 제공하여 스크린 리더가 내용을 읽을 수 있도록 지원</li>
                <li>색상 대비 비율을 충분히 높여 텍스트 가독성을 보장</li>
                <li>키보드 네비게이션 지원 (Tab 키로 이동 가능, Enter 키로 동작 가능)</li>
              </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BadgePage;
