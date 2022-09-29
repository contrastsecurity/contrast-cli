import commandLineUsage from 'command-line-usage'
import i18n from 'i18n'
import constants from '../../constants'
import { commonHelpLinks } from '../../common/commonHelp'

const auditUsageGuide = commandLineUsage([
  {
    header: i18n.__('auditHeader'),
    content: [i18n.__('auditHeaderMessage')]
  },
  {
    header: i18n.__('constantsPrerequisitesHeader'),
    content: [
      '{bold ' +
        i18n.__('constantsAuditPrerequisitesContentSupportedLanguages') +
        '}',
      i18n.__('constantsAuditPrerequisitesJavaContentMessage'),
      i18n.__('constantsAuditPrerequisitesContentDotNetMessage'),
      i18n.__('constantsAuditPrerequisitesContentNodeMessage'),
      i18n.__('constantsAuditPrerequisitesContentRubyMessage'),
      i18n.__('constantsAuditPrerequisitesContentPythonMessage'),
      i18n.__('constantsAuditPrerequisitesContentGoMessage'),
      i18n.__('constantsAuditPrerequisitesContentPHPMessage')
    ]
  },
  {
    header: i18n.__('constantsAuditOptions'),
    optionList: constants.commandLineDefinitions.auditOptionDefinitions,
    hide: [
      'application-id',
      'application-name',
      'organization-id',
      'api-key',
      'authorization',
      'host',
      'proxy',
      'help',
      'ff',
      'ignore-cert-errors',
      'verbose',
      'debug',
      'experimental',
      'tags',
      'sub-project',
      'code',
      'maven-settings-path',
      'language',
      'experimental',
      'app-groups',
      'metadata'
    ]
  },
  commonHelpLinks()
])

export { auditUsageGuide }
