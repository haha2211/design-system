import React from "react";
import Avatar from "../components/Avatar/Avatar";
import styles from "../components/Avatar/Avatar.module.scss";

const AvatarPage: React.FC = () => {
  return (
    <div>
      <h2>Avatar</h2>
      <div>
        <ul>
          {/* <li className={styles.cont_wrap}>
            <div>
              <Avatar src="../public/images/common/user-avatar.png" alt="사용자 이름" size="small" shape="circle" />
            </div>
          </li> */}
          <li className="cont_wrap">
            <h4>Anatomy</h4>
            <div className="cont">
              <div>
                <img src="../public/images/components/Avatar_Anatomy.png" alt="Avatar Anatomy" style={{ maxWidth: "20rem"}} />
              </div>
              <ol>
                <li>1. Container</li>
                <li>2. Image (Optional)</li>
                <li>3. Initials (Optional)</li>
              </ol>
            </div>
          </li>
          <li className="cont_wrap">
            <h4>Style Guide</h4>
            <div>
              <h5>Size</h5>
              <ul className="cont flex_ac">
                <li className="cont_list">
                  <Avatar src="../public/images/common/user-avatar.png" size="small" shape="circle" />
                  <p>Small</p>
                </li>
                <li className="cont_list">
                  <Avatar src="../public/images/common/user-avatar.png" size="medium" shape="circle" />
                  <p>Medium</p>
                </li>
                <li className="cont_list">
                  <Avatar src="../public/images/common/user-avatar.png" size="large" shape="circle" />
                  <p>Large</p>
                </li>
                <li className="cont_list">
                  <Avatar src="../public/images/common/user-avatar.png" size="xlarge" shape="circle" />
                  <p>XLarge</p>
                </li>
              </ul>
            </div>
            <div>
              <h5>Shape</h5>
              <ul className="cont flex_ac">
                <li className="cont_list">
                  <Avatar src="../public/images/common/user-avatar.png" size="large" shape="circle" />
                  <p>Circle (default)</p>
                </li>
                <li className="cont_list">
                  <Avatar src="../public/images/common/user-avatar.png" size="large" shape="square" />
                  <p>Square</p>
                </li>
              </ul>
            </div>
          </li>
          <li className="cont_wrap">
            <h4>Behavior</h4>
            <ul>
                <li>클릭 시 사용자 프로필 페이지로 이동 가능</li>
                <li>호버 시 테두리 강조 효과 추가 가능</li>
                <li>이미지가 로드되지 않을 경우 자동으로 이니셜 표시</li>
              </ul>
          </li>
          <li className={styles.cont_wrap}>
            <h4>Accessibility</h4>
              <ul>
                <li>alt 속성을 사용하여 스크린 리더가 내용을 읽을 수 있도록 제공</li>
                <li>키보드 네비게이션 지원 (Tab 키로 이동 가능)</li>
                <li>충분한 대비 색상을 사용하여 가독성 확보</li>
              </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AvatarPage;
