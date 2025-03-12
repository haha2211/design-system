import React from "react";
import Accordion from "../components/Accordion/Accordion";
import styles from "../components/Accordion/Accordion.module.scss";

const AccordionPage: React.FC = () => {
  return (
    <div>
      <h2>Accordion</h2>
      <div>
        <ul>
          <li className={styles.cont_wrap}>
            <div>
              <Accordion title="Title1">상세 내용1</Accordion>
              <Accordion title="Title2">상세 내용2</Accordion>
              <Accordion title="Title3">상세 내용3</Accordion>
            </div>
          </li>
          <li className={styles.cont_wrap}>
            <h4>Anatomy</h4>
            <div className={styles.cont}>
              <div>
                <img src="../public/images/components/Accordion_Anatomy.png" alt="Accordion Anatomy" />
              </div>
              <ol>
                <li>1. Container</li>
                <li>2. Title</li>
                <li>3. Indicator</li>
              </ol>
              
            </div>
          </li>
          <li className={styles.cont_wrap}>
            <h4>Behavior</h4>
            <div>
              <h5>Status</h5>
              <p>Status는 Open, Closed로 분류되며 기본 설정값은 Closed. 필요시 Open으로 설정</p>
              <div className={styles.cont}>
                <div className={styles.img_wrap}>
                  <img src="../public/images/components/Accordion_Status_open.png" alt="Accordion Status Open" style={{ maxWidth: "20rem", marginRight: "2rem"}} />
                  <img src="../public/images/components/Accordion_Status_closed.png" alt="Accordion Status Closed" style={{ maxWidth: "20rem" }} />
                </div>
              </div>
            </div>
            <div>
              <h5>Divider</h5>
              <p>그룹으로 사용 시 #E7EAEC, 높이 1의 Divider로 Accordion 사이를 구분</p>
              <div className={styles.cont}>
                <div className={styles.img_wrap}>
                  <img src="../public/images/components/Accordion_divider.png" alt="Accordion divider" style={{ maxWidth: "20rem" }} />
                </div>
              </div>
            </div>
          </li>
          <li className={styles.cont_wrap}>
            <h4>Accessibility</h4>
              <ul>
                <li>aria-expanded, aria-controls 등 접근성 속성 추가</li>
                <li>키보드 네비게이션 지원 (tabIndex={0})</li>
              </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccordionPage;
