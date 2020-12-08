import { parseISO, format } from 'date-fns'

import ptBR from 'date-fns/locale/pt-BR'

interface DateProps {
  dateString: string
}

const Date: React.FC<DateProps> = ({ dateString }) => {
  const date = parseISO(dateString)

  return (
    <time dateTime={dateString}>
      {format(date, "dd 'de' MMMM',' yyyy", {
        locale: ptBR,
      })}
    </time>
  )
}

export default Date
