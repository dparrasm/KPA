export type Warning =
  | 'OffTopic'
  | 'SuspectedDuplicateAccountActivity'
  | 'Spamming'
  | 'ManipulationOfKarmaPoints'
  | 'IrrelevantContent'
  | 'DuplicatePost'

export const WarningType: Record<Warning, string> = {
  OffTopic: 'Off-topic',
  SuspectedDuplicateAccountActivity: 'Suspected duplicate account activity',
  Spamming: 'Spamming',
  ManipulationOfKarmaPoints: 'Manipulation of karma points',
  IrrelevantContent: 'Irrelevant content',
  DuplicatePost: 'Duplicate post'
}
