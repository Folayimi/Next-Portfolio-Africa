import ProductPage from "@/Components/ProductPage/ProductPage"
import { useRouter } from "next/router"

export default function ProductCont() {
    const router = useRouter();

    const Id = router.query.id
    console.log(Id)

  return (
    <>
      <ProductPage Id={Id}/>
    </>
  )
}
