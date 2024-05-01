import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductDescription from "./ProductDescription";
import ProductCharacteristic from "./ProductCharacteristic";
import Skeleton from "react-loading-skeleton";

function TabMenu({ product }) {
  const [params, setPrams] = useSearchParams()
  let isActiveTab = params.get('tab') ? params.get('tab') : 'description';

  function handleTab(tabName) {
    setPrams((prev) => {
      prev.set('tab', tabName)
      return prev
    })
  }

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])


  const list = [
    {
      id: 1,
      name: 'Mahsulot ta\'rifi',
      tabName: 'description',
    },
    {
      id: 3,
      name: 'Xususiyatlar',
      tabName: 'characteristic',
    },
  ]

  let tabContent = {
    'description': <ProductDescription product={product} />,
    'characteristic': <ProductCharacteristic product={product} />,
  }



  return (
    <section className="tab-menu">
      <div className="container">
        <div className="tab-menu__wrapper">
          {
            loading ? <Skeleton height={35} width={250} style={{marginLeft: '20px'}} /> :
              <div className="tab-menu__top">
                {
                  list.map(item => (
                    <button
                      key={item.id}
                      className={isActiveTab === item.tabName ? "tab-menu__link active" : "tab-menu__link"}
                      onClick={() => handleTab(item.tabName)}
                    >
                      {item.name}
                    </button>
                  ))
                }
              </div>
          }
          <div className="tab-menu__content">
            {tabContent[isActiveTab]}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TabMenu;
