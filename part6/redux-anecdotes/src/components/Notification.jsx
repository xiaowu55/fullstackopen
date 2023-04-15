import { useSelector } from "react-redux"

const Notification = () => {
  console.log(useSelector(state=>state));
  const notification = useSelector(state=>state.notifications)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification