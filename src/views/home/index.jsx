// ** Import Recoil
import { useRecoilState } from 'recoil';
// ** Import Custom Compnents
import MyButton from '../../components/Buttons'
import MyImage from '../../components/Images'
// ** Import Images
import appLogo from '/logo.svg'

const HomePage = ({ showState }) => {
  const [show, setShow] = useRecoilState(showState);
  const onOpen = () => {
    setShow(true);
  };

  return (
    <div style={{ marginTop: '70px' }}>
      <MyImage file={appLogo} size={'300px'} alt="giki logo" />
      <div style={{ marginTop: '50px' }}>
        <MyButton title={'OPEN MODEL'} width={'120%'} onClick={onOpen} isFilled />
      </div>
    </div>
  )
}

export default HomePage
