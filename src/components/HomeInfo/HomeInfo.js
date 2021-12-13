import React from 'react'
import './HomeInfo.css'
import ImgHomeInfo from '../../images/Rectangle 12-1.png'
import { useTranslation } from 'react-i18next';

export default function HomeInfo() {
    const { t, i18n } = useTranslation();

    return (
        <div className="home-info">
            <h1>{t('HomeInfo.1')}</h1>
            <div className="home-info-body">
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi vitae molestiae blanditiis ullam harum quisquam, facere iure saepe aspernatur impedit ut, consectetur voluptatem ratione illo exercitationem, magni sed numquam? Non voluptatibus quisquam unde, delectus hic soluta error nulla. Dolorem, non error magni suscipit soluta illo id eum animi, voluptatum saepe sapiente dolorum placeat cupiditate odio minima a, ex distinctio nulla. Corporis veniam nisi at suscipit quam nam, dolores voluptatem itaque iure. Corporis numquam aspernatur saepe, molestiae expedita quia architecto, consequuntur ipsa esse obcaecati facere porro et illo iste repellat asperiores fugit, dignissimos accusamus quaerat ad ab veritatis! Veniam, nemo eligendi!
                </div>
                <div>
                    <img src={ImgHomeInfo} alt="" />
                </div>
            </div>
        </div>
    )
}
