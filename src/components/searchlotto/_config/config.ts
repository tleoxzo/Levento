export type Lottolist = {
  response: {
    result: {
      date: string;
      data: {
        first: {
          price: string;
          number: {
            value: string;
          };
        };
        second: {
          price: string;
          number: {
            value: string;
          };
        };
        third: {
          price: string;
          number: {
            value: string;
          };
        };
        fourth: {
          price: string;
          number: {
            value: string;
          };
        };
        fifth: {
          price: string;
          number: {
            value: string;
          };
        };
        last2: {
          price: string;
          number: {
            value: string;
          };
        };
        last3f: {
          price: string;
          number: {
            value: string;
          };
        };
        last3b: {
          price: string;
          number: {
            value: string;
          };
        };
        near1: {
          price: string;
          number: {
            value: string;
          };
        };
      };
    };
  };
};

export interface LottoResponse {
  result: {
    date: string;
    data: {
      first: {
        price: string;
        number: {
          value: string;
        }[];
      };
      second: {
        price: string;
        number: {
          value: string;
        }[];
      };
      third: {
        price: string;
        number: {
          value: string;
        }[];
      };
      fourth: {
        price: string;
        number: {
          value: string;
        }[];
      };
      fifth: {
        price: string;
        number: {
          value: string;
        }[];
      };
      last2: {
        price: string;
        number: {
          value: string;
        }[];
      };
      last3f: {
        price: string;
        number: {
          value: string;
        }[];
      };
      last3b: {
        price: string;
        number: {
          value: string;
        }[];
      };
      near1: {
        price: string;
        number: {
          value: string;
        }[];
      };
    };
  };
}
// interface LottoNumber {
//     value: string;
//   }

//   interface LottoPrize {
//     price: string;
//     number: LottoNumber;
//   }

//   interface LottoData {
//     first: LottoPrize;
//     second: LottoPrize;
//     third: LottoPrize;
//     fourth: LottoPrize;
//     fifth: LottoPrize;
//     last2: LottoPrize;
//     last3f: LottoPrize;
//     last3b: LottoPrize;
//     near1: LottoPrize;
//   }

//   interface LottoResult {
//     date: {};
//     data: LottoData;
//   }

//  export interface LottoResponse {
//     result: LottoResult;
//   }
