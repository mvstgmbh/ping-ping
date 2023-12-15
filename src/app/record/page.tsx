import { withNavbar } from '../components/hoc/withNavbar';
import { RecordMatch } from '../components/organisms/RecordMatch/RecordMatch';
import { MainContainer } from '../components/ui/MainContainer';

export default function Record() {
  return <MainContainer>{withNavbar(<RecordMatch />)}</MainContainer>;
}
