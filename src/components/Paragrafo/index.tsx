import { P } from './styles'

export type Props = {
  tipo?: 'principal' | 'secundario'
  children: string
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
