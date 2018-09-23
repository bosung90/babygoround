import React, { Component } from 'react';
import { css } from 'react-emotion';
import { colors } from '../common/index';
import { firestore } from 'firebase/config';

class RegistrationFormTwo extends Component {
    state = { equips: [], showTextBox: false }
    handleOnClick() {
        this.setState({
            showTextBox:true,
        })
    }
    componentDidMount() {
        firestore
            .collection('Equipments')
            .get()
            .then(docs => {
                console.log(docs);
                const tempEquip = [];
                docs.forEach(doc => {
                    const equipID = doc.id;
                    const equipData = doc.data(); 
                    equipData.id = equipID;
                    tempEquip.push(equipData);
                })
                this.setState({ equips: tempEquip });
            })
    }
    render() {
        const equipList = this.state.equips.map((item, index) => {
            return (
            <div key={index} className={equip.container }>
                <div className={ equip.itemContainer }>
                    <div className={ equip.itemWrapper }>
                        <img className={ equip.item } src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABPCAYAAAAdiWChAAAAAXNSR0IArs4c6QAAG1dJREFUeAHVXQmcHEW5r+ru2Z3p2UC4BDkTks3ubIwg4AEJl08uMaAgUUyyxwNUhKAPffrzyQOfyk94Rh8EL1TYTTYQDIjciCCgIQICAUOS3c214ZAAEsOx0zu7O931/l/PVHX17OxcO5Ojf5nU9dVXx3fUV19V93K2mz2PCRF9dV3qw57hftgTfDo32N5MiIkYxjDnbLvwjK3c8J6zIvGn507hG3az4TG+u3S4a0NqCnPTlzKPtQnG9iqp35yvMgT7xX4Ru/uTjXyopDo7GWiXJ8iS10VcbB+8QghxuWCirpL54oxvFIZY0NHc8IdK6u/IOrsEQZYLUedsHG7krptgnjdFMD5JcDaZMzEZ0vB+JtiE3ElBx98GzDOM8dcMxrd6wosxzg9E/mTAHg0Cjhob53wryl7Drx/1tnAh+g1mbvBMb11bk/2P3DZ2RnpUp2vdiSUbxfvcdPIocC0mjR3FmJjOBQcRhFWsbUwo6CNuw1QvmdEU/9MxnI/kq9O9Lvl+l7FzBBcLQMymfDC5eVh/3gUNewzOVqPsOdNgq/Y27NU7WtXVnCBL1g8lPDd9PBbe48HBs8C5k3Ino5Q0iPEsJmxBR4v9VCnwBIMKkTW9ya+Cilfmk7LieHyCr0LbK8ALT8Ti9oo5h/B/Fa9XOUTVCbJ0g9gj7Q6eLjxxGrjuVBDg4HK6R1IwSt1wfmO82b5kDudg/PKf7t5UkyvcB4F3cqg25x4YxQjlFUr48OwZw2B/ZII/2NoceyojtYUqlVdWFYJ09ouJfMg5V3jsHCD8RCmLL1TWAGy8v6O7z0MFrTWF0SO4sd0TI4+Am/eTw+AG/+/25vgPZLrSsLN/4ACW4veDAFCT8uE3G9y8lnE34QmRQO4M9P8orGHTSiEUiLEVfb2LG8btrU3Rx6tBnIoJAm4zutc7p7sea8dAzsIA6uUwc0O/o0L0InwCa8BKz4g83T6tbj3Sng7btS75AIh5hszj3FjYnrD/U6bHG97aJ/Ydcp1n0YfDJC4Q/GwQ/B6ZppAsO/ZO6kOecI+DJMwE/HFY7/bVYUbH+SvQCEuZZd7U3hjdNLq8tJyyCZJRSckvo6NfHqUCtDYx2WTRPGQw42EWiT7SOpW/qRWPii7ucS6FpXSDKuDs0Xhz/NRK1ZTCkxPBgn+Uy9lK9D1KRZjEtxCb0TG54fUcUJUELF+6PvlBMN8pWI9OhRFy4lhagJgPMH+EWru+rSn+oEJSYqRkgpBaMlLOV9E5WiTzb8w43wwTdDk32V3zG2N/o86V0g+yitKMbQQn2gQPdfZynWkf/YUm/lYp9cuFWdwz0OYJ1qXqcXZrR6JhrkoXidzdKyZsZ4NnMOF9Bow5G8SJ56uC8T+HwXwPJvW9pc5FUYIsf1M0OG8538qakHvmNuyvBYx1Q+8uKccC0vF09SRvBKG/qPIMdkatN3Fo8260eRa1SZNlCnbM/Jb4KtWHEiO+etueOttj7kUQjZPyVcMcvcAMdlWuaswPmy83m7e41/ksOn0dfgeNAuOsjzHjZxErtnheI393VHmJGZ19Q83cS69BG2amCn+goyV+ZonVKwbr3pia6g67a6XqAWc+0t7ScErFCFGxa8PQdDaSvgTR+cDbMBoXf8A0jEthnfWPLsvk5JWQWzYPHjY85N2Ihfq03IrgJuwDxFVtzfGHSxXDXBx6Gpx6B4hxLuWBk9LCtGZ0NNX36jC1inf1OD8SwvuGxG9Y1ilt06KPyHSlIa2zI27yS1DY34LU7KPjwZwNYqBX2032NfnWx1EEWdybPBt7iM7cdQKL32qsD1e0JuL36g2MJ76kd3CyK7yN0sREZ3/anogvGA/Ocuou3yT2dIaTm+SkgSEebG+Jf7IcHIVgfcKkncvBwJfnbkwx8X+pN/j55zfHyZWjHrUpApcaxDGeJ+7SiYGKb0PJfhEScWQ1iUE9gO3/FUkMtIF11vix6tkOiMyZwt+BXP5KNcXZ6bdsSjWq9DgjpMo7EvHvxq34FDD0LTo6zPEJKSFe6OwZPEnP9wlCzr3FPclluvj6QJzfaTLeAqS/roZ60hu+9zVYVMK7QOZBvO/pSMS2yPSOCi2L/5xUJbUHpuTDQ/4aUNXm5zTyf7YnGuaZIDgY4CWF3N8Ae3+gtVrm+QRJ9jrLQLE5MhPcOsQMfjEIcS4sD9pPVP3Z9q5zfkgSDWNR1RsBQpJ8+o2Fe16j/Sqg7pTl4OSO5a+ImExXM2xNNDzEYvaRmN9A7WNDDU3x267eZMbi61o30IqJWSwbRofetAz+qXlNcbi2a/eg3UfQ7r9RC2hzDThoRjVaw2Tu7bwHYnNxHjh/CnT3AXDNuAhfgPrt/kDC/lWul3hJ3+As13VXyPYNwzivrdm+Q6arHZIkdvU6V4FbrpK40bft9oT4QVinubL/iRiROmtWrYlBLni0e5LsDAgT0q8yv5zwlpfEXlC7i0CMrTA5fwoCnIiBH4y4hYHDrSM+Svnw/q4mZ6OOu7Up9gRU8haZh3qfk/FahKT+aW3hzMCCn3kwB3sNOaljDHR2uszEJN0wd0p0g0rXKCKG/f2NKdFzy7pdxisJYRn++4iT3ADRX4BJryuEAxZVs+uln8wlCuRUl4gzaUNcCE81ytoSsesw55slrrSbPghHzjilzj7obNFDIgk7ntDjQq1XUCvPV+qMI7Oyq2dgGSzDm6TpWkq/iBvTXvpOf5edrYDLEoopICGx5FuDnyoF13hgfENJsIjEIRh83sh8VmbA0lGeVplX7ZAWTDjnjlV4uVATofJKiNBOO51OPgNCfD4HfAX08VqZh/jbzOSfiUQi08GNavFGeYv4l9Mm4eBv+ptuAeH4+BOyrFahv7Nn4hCJv960+okgD8gMLH7HkC6W6VqEqWTqWF2tWFbk7nLbwYI40x1JPwViTJN1IWlJuNIv7GhpOAF+NaVuhGHc2NEUv2teY/26iGV3gChKI3icqfWT8EC16305UeKuWTjinipxgw7uHhMiawzTNB+WmVhPjJGkc5xK1yACF7saKCbxdZqocppZ3JeEl1U8rKso4Embhnk0nHc3ZXBlXOuZuLdN4hcjTpzGKNOIH0FWmUpz/icZB9NMXdabPFCmaxHCEpwl8WI8z84+kDvG3Kl1Pb5YZ0sgJR+WQLUIMVBFEHTo0XLa6Fw/cKTnMvLShvYJwGm5njuVcKEME86HJV6ox1lLepKzafOFc5B7ZL4MBweG1MGTqLf/Qpwqy1IeP0HGaxKKYK4hnX+lNkhlQcLZ81qDVdkPaPhU9IENoh7c/FGZgbbLIojhGuAooRZBXf0IxpZjgV8K03cNYJReBoHOcoW4x/O82xE/RrYtQy+aflfGOybzt4FnlUxjHVHMI/OqFZIfTe8n56bfblZ8ebAIZs6Wq9VuCM82L/URTIp/UkcFOE0siyBe1LsDe6VeEAKeBPZN8NK3gwaEDbGfiwlNBHmFY7TvGnVSGGKS2hEk5Q42h3pnej4NfDMXnLoRE5Up53xSCLCKCXh2Fcehza2FzgXyNZudvMRjQlgnc7jq/R1vcn9sAtUGK189ykN7GKD4J4b5PgUjcHsk5zGFWCl1FhGXNrHFjp9zUJSUhOo9XAec6NobKe1LCHRwvyzEIGPLN4j9ZLqqoRdwHAarzO1y2yBiUB2aZBy9ft0wIkdAFf4S6fvwe1XiQ9w1uNVUH40fsM+edgN2xjfLMgoFN2/S0xQH2UL9EunBmqwjXHiHyrYhqdvObubvUdoniMVZyIE4nB4+QAJXK4RHGaekXFlwaPi5auFua65fjXOMi3GWMhs41aRDGl5rS0TXf+Fw/sZb7w0fiktY/yHbBLFWwrv8uEzLkJypKFPzAQ/48bKsmiFMD32OVXs+QTzLeENvLG14gVjrBeOIj2weOhw86V9iyKKpGkH0bsFKVIOjRRN7ljm+MeGml8EEqydYTDh2xOxrej09niO9NTFyclSnmn+fICwe3aZ3CBdZqr45xPl1aBHzoiKkGvT2aXMK1Znpm15QQrwuZv8W6mtAgQpx2xsjTh/U8pFBHvtla3N8zPbRsMYsPNRvhWO8EcHpnRb5qPn3B916AE+CbTxZKpg3QcarFbpcqIGRzhxl3WQbwhn7T4eTyX/BYfg8Xbcpt/25h/HtMOa/I+vRwg9JOUymYeK/aE+wv67SeSIg6IsyG/XfnzFRZU51QnRqjwBTZv2gtG9lUQQ29wBENQtkhCZicY/YhzHnWFgz0MO8zuDediw/62P7xF6c8z6NGwnRWI9HnIYW8GCOfIsiF3Rx7+A8z3MvycCwD24XDi2o9+fCFUu3N9uLOtc5OFoQ10g1lanDHdO0PocL04OFcOANrE04QVFP1kR9WmUUiCzd4BycTnst2JBOhV60QNBB0+SrWxpjq/RzGLDJhOx0YCqFv6ATWkUQxFP4ZQgivDoqXNKbPAYH3f8tmDM7w2mUC/nx59VjuK813Nkz8GdD8LvMiL200HUgSEVCWtaYqE2ESX/omuewl7xO5XH2jm2Rw6+yh1t8lUiLYFqhAbBufKF1Wn1PMYz1e8U3pd9KKjDheiTdYxKEbvjDU9CGd1tmj4x4LVQRKpIuDfg43LRgL/Ym34H0/9xusBfSDXosC3WZUrLsDJp7/1F6GhaQb0pm8yM4UrzA89iTIMRZATGypdkAjdah3VNgvfwsPeL8o7M3+TO6SRKGksCByoJ7YBRBhrzkt0EwSGLmgfkpkmnnhc51yZfxu59uw8iyYuHiPucjwnXvw7QoIwJtXo6LGrrzcEw0WalXC63HjUQ+YPKr4eTzYTc9sg7E+BZgfGLkg8U87Yl5/HZywHkmcxbDlccB+WruFUEwASoTxLkQV4F+gznRJQhqjQ/jF7CO1jJgG8ARX4GLohcujOv1vQxtrsANgaEgwhJCOhp4L9bQEX9NhLqBc4/cIOKTdBuGzj6KeaPp7i44+iEgUGqXLm3jSPZ6HX/RuM40XsBMVA/q8GMgxJ89V+ByOPtEXly0JkPKyaILlQtxOB2QIU+ZvdAeau4VQTChwUuRqKSQZBb7600r0tKWsGOw9xviE+I2ruDPolcFABfy1gJPHTj9Mied3Agpu9iXrpFUiMO4YYYkxBnxTxBjqs0xIsD7+WEn+Xva0+QDIcnA4fmffGJmAUDoX1Rygx5qOOhj1iAhtQpCdEMXPYk2aH1TDybexe8+LFwX1dVb07CORbBpnUgbUrptgn48IYFRdy+fgVWGUCpLSQBxPoAkSCb0iSEuwBlDF2W0ZnJZdlFciST9fkAcA0b4JuKfluoNk7cHOPzn8LLOBYeH1gK3zt2YRZUJPHFSKJ1JrMMA74CGhY/Km4+s/f1snJUP9joXIn5jBizzf3ff4PHQ4/dhBMp6Qf0uSMYl7TpgiXF4onGBLwOMBXpKV+9AB9a4/0XWviEUkAKow0WGx36h39DBoP2HXOqIPAQmeoxu92BOzskWqQAqkWD8RxEE4pWUHZCFWASvbmvOEEPm5Quzl6zP6e4bOCLt8WvR6GkSDgSaiTj9sg93OibHX5cpCgXnLagTZGVeRTgDVy19Nzo481q817Eqo778M2c6WFIEoSs0ruf9FiiiEgmI0QliXIhQQyxLSwi5sYllbQIwqoWD7ptDteDgBOaFImovbIOXOFSWJ0FjeQyXJ17qTa5FP6fpIAYXahnQVBYLNlOAJonBmliW3p3f1PB33KY4HV5ccIF2IUxvPY+FRRuFEAg3rpTEoHx6LQHqcaGCEWwGBuczU2ePQy923gnCK2JgT3UjiHEBiOGpOmVGsIYGKiunLvDezy1zOtT3FR0lEENWP5l8cIJdLdMyxGKjzF5FECwsr0gAP+Ti3rYE3xbKKzHR1mL/Pr6v/QF0/Fe5VSD+owcq2JshONMISVC2TMsTkddeZhNgRuJCuLcIxFBrCtTHDdDfF6PtEJFD+EtI1JuxsFpFHTDO21j/5sFn9qlKL2bg7hXuEITfHsZNk1dllxRBkLFFZlKIjQtUROUPmY7o+JewKToTk6MWLWyCtuRixUBhomqP652ppTJRIVQepDeNo+ZHQQhSXZmHpAFnJG2J+GXjJQYhzLws5Ot/2cDTVsSY0d4cuyWbUVFA6y+Yf7VeGec8/TKtCGIIQ2VmCo0tEmg8YWtTnN4bHJE4oD/fkHEZWnF7GSY5UJmeuJrecqIbKmTm4hTwKky+tCkg9cLCT/mmqC5E5NN4yedHEmdVQs6UVELg/pq5djp+zBDd1yQWYtb2SXE1J4og8M/3SiAKTRFsXPT8cuOwLmjzqPYEUClh9QSE5H/C3uciiRuT3YBNbhc2UQPk18IFuO/KstEhf4kb1sxq38yndiC5Wl+52rSO7kN5OcCLf5kHxOnTJVoRJJGwX9RVi+C+u0DWqzh0+5yQmYhXpxU36Ehhqd2Gbv5Ez4PlpfoXylcJfnO83j6CzkNUVhUjujQjHhrHeJoBEY6S9THA0JZADTjr+HpOAsLKOFHGxxO6wgpxFt5OzUsQaoNO/7Cr/gaspGCTmqdxMM5KWDkn4tW3CzLveOQBqkIWdL3e19A4KkV/y/rU4WA0eCAyD9bqp2WcQkUQSkBVqELsDT7a2a+ZkgRQweNyL8RZZp3xz0JosKv+sQnfEVlLWBtgkfERWiMwOWvwW2RxYyaMhVnt02J/KYSnKmWCqb5Cx4TGUSn+tOeeFKprWk/p6WBjiFxLWH9Is/TlPgBO1/B1hlMRv0evUH6cXPfBExHRopuo7OWHy1DrMizmEIjxmbBB62XGOM5WoKvowc69KgTB2vjpoBf8lfbG+rVBOkdCEon6x6HH31EAIrgUrfLKjMATHAwEpul5h7N3y0Gx04hBneQiYB54ax/LbkbL6b8Omz1wIyb3H0j83TIuw5DKyq4j98tChLPpPFpLlx2FqCsJwRnAaO9n2Rh3YAURdols7Q/GUkkv3hGp2ZA4NZ/cNAsThBrBfgQOvcwDad3jDS85R6YrCvXzeR4eYEX4dmAlrGM4GQ0ed3hoYpAqP4Zvp3xJ1oJ0vHloIzRSzhOSECo7NBGjz0CorTz3+Fdz6pSXFDweVAiOKoO8XTeGo+r39N7hE08NerqcODlesRqdIOtg3/Wbk7P3y2QehaMI4gPxwJOKRfVocm3rlcqL628i5T/cKg/fDoQ2LOWFpVbhNK2YIGmXk5HiP2B4Nxrhv5RpPRxFECqsq7N/DVPTd31TGq7t/6Kwsid4VwP6U/n9K8O1Y2uNpL1Qf/EqRUUEob0H1tJ5Wu/vOX+qHXbmZgvzEoRu+kHHqfMGSMnpS3oGTtMQlhzFxiemgPnuJSFxKxqSEBwBBGNRgyoeGXbda7DHqyNISAdd4fzBWLXyEoSAY5b9fZjASofCfv7xWEenYyGnfFwvUlYFrPkQxxWqtyuUpSawnP7yaLn9wnfAcH1KnBfUE7cV+urQmAShrw9gN6S8p1iQpjt9g5cEiEuN6YMI1GCptXcm3CH7s5ALBxegNOYq3jP6CCck4wYJSctAxLSukOl84ZgEIWBzb/snELF+VVGIa5esG/qASpcSESwYBGdqXSql6s6GIQOHVIzsB05cgrHIzALh2t7B75FRJEFwce7/5k6LbpbpfGFBgvhXTE2jHYrPPwoF8qjHRm6jc4p8yPLlweWg3DMY2W5FEBqP3me6iZhvjPnycAvzZHgpvinLsCav2d+MXSXTY4UFCUKVMk48cZ1EgA5OHxxwSj9rx8vXsi7ubamDKpW3i0cgH6rPiJdEkFs3i/1xU6Yba0d2fuEgtXhrKR9lLkoQf76i8e+Awqvl3OHA6CLc9CioCyUs6qlBIO5LmizbLUKc3Ml+etwLmEtm5oTwkE8cGnIegjY5SBVxcWVbY/x5lS4QKYkguFmRMurM2ViU1JEmzku+T18SLYDbL4L7BSa4etTgVM6uHsFKLruIu1cF58v/KELKuQ+ScYSsg8EvxTnPNTJdLCzYgF65dUrsZcvE93lZcPAPC2IRnX3rcIXiuFSsBlcIblcqg4ouqc90doQP3/wOkjFT6/8KOxG/QEsXjZZMEMLkfyXIZHMhKWlKo3GoVd6ZvYSgSwIVj3qwSSwKM6rSbpBBHxjgg86fwaBnyO5ioPiwf/wz+v0yWVYoLIsghIg+U4EbjefAHPSv9hBRsKZ8F1dGb9c/5iIbxbrhyjikv+z2ZN2dFWJiVZ/BUGossj/0ykZKsGdAjI/IPFilq+xI/MRK7rWpxhSyEiJ0wwPfRzxD38mDMOe6252Vi3tS00IoRDAIEKei9kL4dnRC77MwQgSh+77wYKyAqjhQ69YKfFPlZH9jrWWWGq14gugNVpPzj0NSXlWNYTHDB4VX40bh/5BOpXwcwPrqjeK4tVjUSiG4XemBAlBWIiTEHwu934FXIx6F/XUzGFG5UzAXd+DNgNMKvbhUbGwVE4QQ04uTnNlHoiPBKSNOxNDJK6FTX+xelzoFYGoziNXRd7AV69QuVh5R/cGeCi8OfQ+37FfDejxZ5eOWjMGNBbh8cV6x1+VUnTEiivpjlBfNJj0JAuDjLsmvQxx+CF3q40Q4FRcm6O9sBBur3ZIgwbdV4Ci9Fi8OhZgKdsomeG/nzG+xVxWdrBIAxiUhEj8kROAjlgstbh2FdeJxmZ8JgwHBhNwXxKtKm+E2apOiHbeOGUwWEINeR+D8h8be9hGFvLd6/VLiNTFD6WV9bBwXYgU5JLcT/uaSC3jyjWWVfrw/F2c108HH9b3zoZZOwxgClZVtCIS4D38n5GuV3oAv1N+aEIQapA8lb3s3eSlU1gJIxcH5OoGB9WPAd2HDuILXxVbW4iMv+drV89A33t0zPN010rPgSfw4fmeiT7YOo+J4kQh3166Z3xJ9WOVVOVIzgsh+0pnA2r7U54Tn0d8h/JDMHyPcACKtRKfwt52MDa5gm+PN0VewuQqZm2PULZpNXxod3jY82eVpXOdk02GyzsS6cBxUaYHbJHwE7w3e5lneTzqmNbxQtJFxAtScIHr/6LJEWnifhzP/HBDnAL1srDh5BWBuvow7Xf0woV9FhwdgPjuwoZP4uqljeDwTwjyFe5w+X47P+CHk+IOUeD8Re4SJwDEZPoXJIMJ+Y7WTm486f8M3se+A9XTrjvwbhzuUIHLQtLAvXZ+aCfPxs9id0Hvwk2TZzgvhIue4iS7474x6/jvy3e2MvuwUguQOlHxBI4J/DPuUY6G/8fP/UqfacOXCVyOdMS7wYQQunrS4+VS9HX12vHuI6vSrGliqjOMx3KF9pS91CHT7JHheJoFrJ0FNQe14sNo4vhGCz/mROuLCRj5CBtXEXExuEhPtIO4gjtD3TG+Dw2YLCI2fscVkot/i9pZa/X2r8U7F/wMqGxJluABR2gAAAABJRU5ErkJggg=="/>
                        <div className={ equip.itemLabel}>{item.type}</div>
                    </div>
                    <div className={ equip.checkbox }><a on></a></div>
                </div>
            </div>
        )})
        return(
            <div className={ styles.container }>
                <input type="checkbox" onClick={ this.handleOnClick.bind(this) }/>
                <div className={ styles.header }>REQUIRED ITEMS</div>

                <div className={ equip.container }>
                    { equipList }
                </div>
            </div>
        )
    }   
}

const styles = {
    container: css({
        display: "flex",
        flexDirection: "column",
        margin: "5% 18%",
    }),
    header: css({
        fontSize: "24px",
        color: colors.PRIMARY,
        borderBottom: `1px solid ${colors.PRIMARY}`
    })
}

const equip =  {
    container: css({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
    }),
    itemContainer: css({
        display: "flex",
        flexDirection: "row",
        margin: "1em",
        alignItems: "center",
    }),
    itemWrapper: css({
        display: "flex",
        flexDirection: "column",
    }),
    itemLabel: css({
        color: colors.LIGHTGRAY,
        textAlign: "center",
        fontSize: "14px",
        fontFamily: "'Lato', sans-serif",
        fontWeight: "300",
    }),
    item: css({
        margin: "0.25em",
    }),
    checkbox:css({
        height: "1em",
        width: "1em",
        border: "1px solid lightgray",
        cursor: "pointer",
    })
}

export default RegistrationFormTwo;


