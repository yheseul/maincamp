"use client";

import * as PortOne from "@portone/browser-sdk/v2";
import { v4 as uuidv4 } from "uuid";

export default function Payment() {
  const onClickPayment = async () => {
    const result = await PortOne.requestPayment({
      storeId: "store-727d326c-1e4c-41fa-9f9e-636483c93cc0",
      channelKey: "channel-key-52c49de9-d0b5-4676-a9c7-5541940da2b5",
      paymentId: uuidv4(),
      orderName: "마우스",
      totalAmount: 3000,
      currency: "CURRENCY_KRW",
      payMethod: "EASY_PAY",
      customer: {
        fullName: "예슬",
        phoneNumber: "010-1234-1234",
        email: "qwer@gmail.com",
        address: {
          country: "COUNTRY_KR",
          addressLine1: "서울시",
          addressLine2: "10층",
        },
        zipcode: "12345",
      },
      redirectUrl: "http://localhost:3000/section27/27-01-payment-success",
    });
    console.log(result);

    // 백엔드에 결제 관련 데이터 넘김(뮤테이션 실행) => storeId, channelKey 변경
    // createPintTransactionOfLoading(paymentId: ... )
  };
  return <button onClick={onClickPayment}>결제하기</button>;
}
