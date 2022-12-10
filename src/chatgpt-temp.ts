import { ChatGPTAPIAccountInit, ChatGPTAPIPool } from './chatgpt-api-pool'
import './config'
import { getChatGPTResponse } from './utils'

async function main() {
  const chatgptAccountsRaw = process.env.CHATGPT_ACCOUNTS
  const chatgptAccounts: ChatGPTAPIAccountInit[] = chatgptAccountsRaw
    ? JSON.parse(chatgptAccountsRaw)
    : null

  let chatgpt: ChatGPTAPIPool

  chatgpt = new ChatGPTAPIPool(chatgptAccounts.slice(3, 5), {
    markdown: true
  })

  const account = await chatgpt.getAPIAccount()
  console.log('using chatgpt account', account.id)

  const res = await getChatGPTResponse('test', {
    chatgpt: account.api,
    conversationId: '4e206c7c-263a-407d-b9c2-02f4dd1d79c6',
    parentMessageId: 'd58dd84b-a7f2-4477-aea8-80276bc6eebc'
  })

  console.log(res)

  const account2 = await chatgpt.getAPIAccount()
  console.log('using chatgpt account', account.id)

  const res2 = await getChatGPTResponse('can you follow up?', {
    chatgpt: account.api,
    conversationId: res.conversationId,
    parentMessageId: res.messageId
  })

  console.log(res2)
}

main()
  .then(() => {
    process.exit(0)
  })
  .catch((err) => {
    console.error('error', JSON.stringify(err, null, 2))
    process.exit(1)
  })
