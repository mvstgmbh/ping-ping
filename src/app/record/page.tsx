import prisma from '../../../db/prismaClient';
import { Player } from '../../player/domain/Player';
import { withNavbar } from '../components/hoc/withNavbar';
import { RecordMatch } from '../components/organisms/RecordMatch/RecordMatch';
import { MainContainer } from '../components/ui/MainContainer';

export default async function Record() {
  const players = (await prisma.player.findMany()) as Player[];
  return <MainContainer>{withNavbar(<RecordMatch players={players} />)}</MainContainer>;
}
