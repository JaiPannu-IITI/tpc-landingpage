import styles from "./recruiters.module.css";

import Image from "next/image";

export default function Recruiters(props: any) {
  return (
    <div>
      <div className=" w-[100%] flex justify-center">
        <div className="header3 text-[2rem] w-[100%] hover:text-[2.5rem] text-center">
          OUR RECRUITERS
        </div>
      </div>
      <div className={styles.catalog}>
        {props.logos.map((logo: any, index: any) => {
          return (
            <div className={styles.logos} key={index}>
              <Image
                width={100}
                height={50}
                src={logo}
                alt={logo.alt}
                key={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
