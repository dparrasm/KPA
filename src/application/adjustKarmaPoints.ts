import { Warning } from '../domain/warnings'

const penalizationByWarning: { [key in Warning]: number } = {
  OffTopic: 5,
  SuspectedDuplicateAccountActivity: 10,
  Spamming: 20,
  ManipulationOfKarmaPoints: 15,
  IrrelevantContent: 5,
  DuplicatePost: 10
}

export function adjustKarmaPoints(
  incidence: { warning: Warning; active: boolean },
  karmaPoints: number
): number {
  const { warning, active } = incidence

  const totalPoints = active
    ? karmaPoints + penalizationByWarning[warning]
    : karmaPoints - penalizationByWarning[warning]

  return Math.max(totalPoints, 0)
}
