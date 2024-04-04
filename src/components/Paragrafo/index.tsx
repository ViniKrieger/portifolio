import { P } from './styles'

export type Props = {
  tipo?: 'principal' | 'secundario'
  children: string
}

const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo
