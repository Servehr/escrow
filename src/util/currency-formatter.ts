export default function currencyFormatter(price: any) 
{
    try {
      let NGN = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      });
      return NGN.format(price);
    } catch (error) {
      return "";
    }
}