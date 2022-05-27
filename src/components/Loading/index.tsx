import { LoadingContainer } from "./styles"

const Loading = () => {
  return (
    <LoadingContainer>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingContainer>
  )
}
export default Loading
