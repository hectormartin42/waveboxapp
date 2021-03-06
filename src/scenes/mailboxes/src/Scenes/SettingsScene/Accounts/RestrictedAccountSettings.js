import PropTypes from 'prop-types'
import React from 'react'
import {Button} from '@material-ui/core'
import { mailboxActions } from 'stores/mailbox'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import ConfirmButton from 'wbui/ConfirmButton'
import DeleteIcon from '@material-ui/icons/Delete'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import fasGem from '@fortawesome/fontawesome-pro-solid/faGem'

const styles = {
  root: {
    textAlign: 'center',
    marginBottom: 16
  },
  proIcon: {
    fontSize: 20,
    marginRight: 8
  },
  deleteIcon: {
    marginRight: 6,
    verticalAlign: 'middle'
  }
}

@withStyles(styles)
class RestrictedAccountSettings extends React.Component {
  /* **************************************************************************/
  // Class
  /* **************************************************************************/

  static propTypes = {
    mailboxId: PropTypes.string
  }

  /* **************************************************************************/
  // Rendering
  /* **************************************************************************/

  render () {
    const { className, classes, mailboxId, ...passProps } = this.props

    return (
      <div {...passProps} className={classNames(className, classes.root)}>
        <p>
          Use and customize this account when purchasing Wavebox
        </p>
        <div>
          <Button variant='raised' color='primary' onClick={() => { window.location.hash = '/pro' }}>
            <FontAwesomeIcon icon={fasGem} className={classes.proIcon} />
            Purchase Wavebox
          </Button>
        </div>
        <br />
        <div>
          <ConfirmButton
            variant='raised'
            content={(
              <span>
                <DeleteIcon className={classes.deleteIcon} />
                Delete this account
              </span>
            )}
            confirmContent={(
              <span>
                <DeleteIcon className={classes.deleteIcon} />
                Click again to confirm
              </span>
            )}
            confirmWaitMs={4000}
            onConfirmedClick={() => {
              mailboxActions.remove(mailboxId)
            }} />
        </div>
      </div>
    )
  }
}

export default RestrictedAccountSettings
