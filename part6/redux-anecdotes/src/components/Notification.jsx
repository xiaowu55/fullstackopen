import { useSelector,connect } from "react-redux"

const Notification = (props) => {
  // const notification = useSelector(state=>state.notifications)
  console.log(props);
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}

const mapStateToProps = state =>{
  return{
    notification:state.notifications
  }
}

const ConnectNotification = connect(mapStateToProps)(Notification)

export default ConnectNotification