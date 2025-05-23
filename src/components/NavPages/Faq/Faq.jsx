import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Faq.css";
import Navbar from "../../../pages/Navbar/Navbar";
import Footer from "../../../pages/Footer/Footer";
import FaqImg from "../../../assets/images/white-logo.png";
import { useNavigate } from "react-router-dom";
const faqData = [
  {
    "title": "General Rules",
    "articles": 15,
    "content": [
      {
        "title": "Funded Wagers Basics",
        "details": "<h6>Welcome to Funded Wagers!</h6><p>At Funded Wagers, we know that having a solid betting strategy is just the beginning—having the bankroll to maximize your potential is another challenge. That’s where we come in.</p><p>We offer a unique platform that allows you to test your skills, prove your strategy, and earn a funded account—all without risking your own money.</p><h6>How It Works</h6><p>Your journey to a funded account starts by selecting a challenge that fits your betting style. We offer challenge accounts ranging from <strong>$1,000 to $100,000</strong>, giving you flexibility in how you approach the markets.</p><p>Once your challenge begins, you’ll need to:</p><ul><li>✅ Place at least <strong>15 picks</strong> across your favorite sports</li><li>✅ Achieve a <strong>20% return on investment (ROI)</strong></li></ul><h6>Advancing to Phase 2</h6><p>If you meet the challenge requirements, you’ll move on to <strong>Phase 2: The Practice Squad</strong>, where the rules remain the same:</p><ul><li>✅ Place at least <strong>15 more picks</strong></li><li>✅ Maintain a <strong>20% ROI</strong></li></ul><h6>Rules to Keep in Mind</h6><ul><li>🔴 If you lose more than <strong>10% of your account in a single day</strong>, you’ll fail the challenge</li><li>🔴 If your total losses exceed <strong>15% at any time</strong>, your challenge will end</li><li>🔴 Challenge results are determined based on the sequence of event outcomes</li></ul><h6>Reaching a Funded Account</h6><p>Once you successfully complete both phases, you’ll earn a <strong>funded account</strong>, meaning you can start earning rewards based on your winning picks. To keep your account active, you must:</p><ul><li>🚫 Stay within the <strong>max loss</strong> and <strong>max daily loss</strong> limits</li><li>🚫 Place at least <strong>one pick every five days</strong> to avoid inactivity breaches</li></ul><p>Welcome to Funded Wagers—where your strategy and discipline can turn into real rewards. Good luck, and may your picks bring success!</p>"
      },
      
      {
        "title": "How Does the Fan Funded Challenge Work?",
        "details": "<p><strong>INCLUDE THE VIDEO FOR THE CHALLENGE BREAKDOWN</strong></p><p>Our challenges are designed to <strong>separate the best from the rest!</strong> Follow the rules for each phase carefully to earn a <strong>FUNDED account at Funded Wagers.</strong> Once you reach this stage, you’ll have the opportunity to earn real rewards based on your skills and strategy!</p>"
      },
      
      {
        "title": "What Countries Are Supported?",
        "details": "<p>Funded Wagers is accessible worldwide, allowing sports enthusiasts from most countries to participate in our challenges. Our platform is designed to provide an inclusive and engaging experience for bettors looking to prove their skills.</p><p>However, due to regulatory restrictions, we are unable to offer services to individuals residing in the following countries:</p><ul><li><strong>Cuba</strong></li><li><strong>Iran</strong></li><li><strong>North Korea</strong></li><li><strong>Myanmar</strong></li><li><strong>Russia (including Crimea)</strong></li><li><strong>Donetsk & Luhansk regions of Ukraine</strong></li><li><strong>Somalia</strong></li><li><strong>Syria</strong></li></ul><p>Additionally, our services are not available to individuals who:</p><ul><li>🚫 Appear on international sanction lists</li><li>🚫 Have a criminal record related to financial crime or terrorism</li><li>🚫 Have been previously banned due to contract breaches</li></ul><p>We appreciate your understanding and look forward to welcoming eligible users to Funded Wagers!</p>"
      },
      
      {
        "title": "When Can I Claim My Rewards?",
        "details": "<p>Once you have reached the <strong>funded stage</strong>, you will begin earning rewards based on the successful picks you make. Your earnings will be determined by the <strong>performance of your bets</strong> and the profit you generate from your funded account.</p><h6><strong>Payout Schedule</strong></h6><ul><li>💰 <strong>Standard Payouts:</strong> Rewards are paid out <strong>every 30 days</strong> for funded accounts.</li><li>💰 <strong>Bi-Weekly Payout Option:</strong> Want faster payouts? You can <strong>opt-in for bi-weekly (every 2 weeks) payouts</strong> by selecting the add-on when purchasing your challenge!</li></ul><p>Stay within the rules, manage your risk, and start turning your strategy into real rewards with Funded Wagers!</p>"
      },
      
      {
        "title": "Maximum Allocation",
        "details": "<h6>Challenge Cap</strong></h6><p>The maximum allocation</strong> for participating in Funded Wagers challenges is <strong>$100,000</strong>. This is the highest amount you can manage during the challenge phase.</p><h6>Funded Account Limit</h6><p>Once you reach the <strong>funded stage</strong>, the <strong>maximum allocation</strong> for a funded account is also <strong>capped at $100,000</strong>. However, we are actively working to <strong>increase this limit to $400,000</strong> for serious funded members who demonstrate <strong>consistent achievements and growth</strong>.</p><p>If you have any questions about managing your account, feel free to reach out. We're here to help you succeed!</p>"
      },
      
    
      {
        "title": "What Sports Do We Offer?",
        "details": "<p>At Funded Wagers, we provide a diverse selection of sports for you to place picks on throughout your challenge. Our offerings include:</p><h6><strong>Basketball</strong></h6><ul><li>NBA</li><li>NCAAB</li></ul><h6><strong>Soccer</strong></h6><ul><li>Australia - A League</li><li>Belgium - Jupiler Pro League</li><li>England - Championship</li><li>England - FA Cup</li><li>England - League 1</li><li>England - League 2</li><li>England - Premier League</li><li>France - Ligue 1</li><li>Germany - Bundesliga</li><li>Italy - Serie A</li><li>Mexico - La Liga MX</li><li>Saudi Arabia - Saudi League</li><li>Spain - La Liga</li><li>UEFA - Champions League</li><li>UEFA - European Championship Qualifiers</li><li>USA - Major League Soccer</li><li>Japan - J1 League</li></ul><h6><strong>Hockey</strong></h6><ul><li>National Hockey League (NHL)</li></ul><h6><strong>Baseball</strong></h6><ul><li>Major League Baseball (MLB)</li></ul><h6><strong>Tennis</strong></h6><ul><li>ATP</li></ul><h6><strong>American Football</strong></h6><ul><li>National Football League (NFL)</li><li>College Football League (NCAA)</li></ul><h6><strong>MMA</strong></h6><ul><li>UFC</li></ul><p>We are constantly expanding our offerings, so stay tuned for more sports and leagues in the future!</p>"
      },
      
      {
        "title": "Minimum and Maximum Picks Per Outcome",
        "details": "<p>For each individual outcome, you are required to maintain your picks within the following range based on your account type:</p><ul><li><strong>Normal Account:</strong> Minimum Pick: <strong>1%</strong> of your account balance per individual market, Maximum Pick: <strong>5%</strong> of your account balance per individual market.</li><li><strong>Aggressive Account:</strong> Minimum Pick: <strong>5%</strong> of your account balance per individual market, Maximum Pick: <strong>10%</strong> of your account balance per individual market.</li></ul><p>This structure ensures that all picking activities remain within a <strong>defined risk management framework</strong>, promoting responsible picking and encouraging strategic decision-making.</p>"
      },
      
      {
        "title": "Parlays",
        "details": "<h6>Q: What is a Parlay?</h6><p>A parlay is a type of pick where you combine multiple individual picks into one single wager. To win a parlay, all picks must be correct. The advantage is that parlays often offer higher payouts than placing each pick individually, as the odds increase with each additional pick. However, the risk is higher because if any pick in the parlay loses, the entire parlay is lost.</p><p>Parlays can involve various types of picks, such as point spreads, moneylines, and over/unders, and are commonly used in sports betting.</p><h6>Q: How do Parlays work on Funded Wagers?</h6><p>On Funded Wagers, you can place parlay picks with a <strong>maximum line odds of +2500</strong>. This limit is set to encourage strategic decision-making and responsible betting. It's important to be mindful of this cap when creating your parlays to ensure you stay within the platform's rules.</p><h6>Q: What happens if one of my picks in a parlay results in a push?</h6><p>If one of your picks results in a push (i.e., a tie or draw), that pick will be removed from your parlay. The odds and potential payout will be recalculated based on the remaining valid picks. This ensures a fair and accurate result for your parlay on Funded Wagers.</p>"
      },
      
      {
        "title": "Account Management Policy",
        "details": "<h6><strong>What is the policy regarding account management at Funded Wagers?</strong></h6><p>We strictly <strong>prohibit the sharing, passing, or management of accounts</strong> by multiple users. If we detect a significant number of identical picks across different accounts, we reserve the right to conduct further investigation using our internal filters. Any violation of this policy may result in the termination of the account involved.</p><h6><strong>Why is account management restricted to individual access only?</strong></h6><p>Account management is limited to <strong>individual access</strong> to ensure <strong>fair play, integrity, and accountability</strong> within our challenges. This restriction helps maintain the competition's standards and prevents any potential misuse or manipulation of the system.</p><h6><strong>What actions will be taken if account management rules are violated?</strong></h6><p>If a breach of the account management policy is detected, such as multiple accounts sharing identical picks, we will initiate an investigation using our internal filters. Based on the findings, the account(s) involved may face <strong>termination</strong>. It's essential to follow the guidelines and avoid any form of account sharing or management services.</p><p>Should you have any questions or need further clarification, feel free to reach out to us. We are committed to ensuring a fair and transparent environment for all participants.</p>"
      },
      
      {
        "title": "Cashout Feature",
        "details": "<p>The <strong>cashout feature</strong> allows you to close your picks before they start, giving you more flexibility in your strategy. There is a <strong>10% fee</strong> for using the cashout option.</p><p>Please note that any loss from a cashout will count toward your <strong>max daily loss</strong> and <strong>max overall loss</strong> limits.</p>"
      },
      
      {
        "title": "Game Rules",
        "details": "Defines the general game rules. The full set of rules may be legally required. Please verify compliance with applicable laws before deciding whether to exclude them."
      },
      
      {
        "title": "Hedging Rules",
        "details": "<h6>What is Hedging?</h6><p>Hedging is a betting strategy where a bettor places a bet on the opposite side of their original pick, either before the game starts or once the original bet's likelihood of winning has increased.</p><h6>Hedging on Funded Wagers</h6><p>At Funded Wagers, hedging is not allowed. This policy helps maintain the integrity of the challenges and ensures that all participants are competing fairly based on their original strategies.</p>"
      },
      
      {
        "title": "Insufficient Liquidity and Non-Payable Profits",
        "details": "Explains issues related to liquidity and non-payable profits. Profits from trades executed in markets with insufficient liquidity—where positions cannot be accurately replicated or offset due to a lack of counterparties—will not be paid out.<p> To qualify for profit payments, trades must occur in liquid markets where execution and closure are feasible without significant difficulty.</p>"
      },
      
      {
        "title": "How Many Accounts Can I Create and Trade?",
        "details": "<p>At <strong>Funded Wagers</strong>, you can create multiple accounts. However, the maximum cumulative allocation across all funded accounts is currently capped at <strong>$100,000</strong>.</p> <p>We are actively working on increasing this limit to <strong>$400,000</strong> for serious funded members who demonstrate consistent growth and achievements.</p> <p>If you have any questions, feel free to contact our support team.</p>"
      }
      
    ]
  },
  
  {
    "title": "Challenge/Funded Account Rules",
    "articles": 5,
    "content": [
      {
        "title": "Rules and Targets for 2-Step Normal Challenge",
        "details": "<h3><strong>Step 1 Requirements</strong></h3><ul><li><strong>Reward Target:</strong> Achieve <strong>20%</strong> of your starting balance.</li><li><strong>Daily Loss Limit:</strong> Do not lose <strong>10%</strong> or more of your initial account balance in a single day.</li><li><strong>Overall Loss Limit:</strong> Ensure your total loss does not reach <strong>15%</strong> or more of your initial balance.</li><li><strong>Minimum Picks:</strong> Place at least <strong>15 sports picks</strong> during this phase.</li><li><strong>Risk Per Game:</strong> Maintain a <strong>minimum risk of 1%</strong> and a <strong>maximum of 5%</strong> per game.</li><li><strong>Time Limit:</strong> Complete these requirements within <strong>30 days</strong>. You can <strong>opt-in for no time limit</strong> by selecting the add-on when purchasing your challenge!</li></ul><h3><strong>Step 2 Requirements</strong></h3><ul><li><strong>Reward Target:</strong> Achieve <strong>20%</strong> of your starting balance.</li><li><strong>Daily Loss Limit:</strong> Do not lose <strong>10%</strong> or more of your initial account balance in a single day.</li><li><strong>Overall Loss Limit:</strong> Your total loss should not exceed <strong>15%</strong> of your starting balance.</li><li><strong>Minimum Picks:</strong> A minimum of <strong>15 sports picks</strong> are required in this phase as well.</li><li><strong>Risk Per Game:</strong> The risk per game should be between <strong>1% and 5%</strong>.</li><li><strong>Time Limit:</strong> Complete within <strong>60 days</strong>. You can <strong>opt-in for no time limit</strong> by selecting the add-on when purchasing your challenge!</li></ul><h3><strong>Funded Account Requirements</strong></h3><ul><li><strong>Daily Loss Limit:</strong> Do not lose <strong>10%</strong> or more of your initial account balance in a single day.</li><li><strong>Overall Loss Limit:</strong> Your total loss should not exceed <strong>15%</strong> of your starting balance.</li><li><strong>Minimum Picks:</strong> A minimum of <strong>15 sports picks</strong> are required in this phase.</li><li><strong>Risk Per Game:</strong> The risk per game should be between <strong>1% and 5%</strong>.</li><li><strong>Monthly Rewards Cap:</strong><ul><li>First withdrawal: <strong>35%</strong> of your initial account balance</li><li>Second withdrawal: <strong>45%</strong> of your initial account balance</li><li>Third and subsequent withdrawals: <strong>50%</strong> of your initial account balance</li><li>You will receive <strong>70%</strong> of any earnings up to the cap. Earnings above the cap are disqualified from the payout.</li></ul></li><li><strong>Time Limit:</strong> No time limit.</li></ul><h3><strong>Final Step:</strong></h3><ul><li><strong>Complete KYC (Know Your Customer) process.</strong></li><li>You can access your account anytime, but rewards will only be available after completing KYC.</li></ul><h3><strong>Daily Loss Timer Reset</strong></h3><ul><li>The timer resets at <strong>4 AM</strong> every day.</li><li>You cannot lose more than <strong>10%</strong> within that 24-hour period.</li></ul><h3><strong>Challenge Target Functionality</strong></h3><ul><li>Targets are based on the <strong>first games</strong> to end.</li><li>If the first <strong>4 out of 10 picks win</strong> and reach the profit target, you move to the next phase (no need to wait for the remaining picks).</li><li>If the first <strong>4 out of 10 picks lose</strong> and exceed the <strong>15% threshold</strong>, your account will be breached immediately (no need to wait for the remaining picks).</li></ul><h3><strong>Minimum Pick Functionality</strong></h3><ul><li>Multiple picks placed on the same outcome will count as <strong>one pick</strong> towards the pick objective.</li><li>Parlays count as <strong>one pick</strong>.</li></ul>"
      },
      
      {
        "title": "Rules and Targets for 2-Step Aggressive Challenge",
        "details": "<h3><strong>Step 1 Requirements</strong></h3><ul><li><strong>Reward Target:</strong> Achieve <strong>20%</strong> of your starting balance.</li><li><strong>Daily Loss Limit:</strong> Do not lose <strong>10%</strong> or more of your initial account balance in a single day.</li><li><strong>Overall Loss Limit:</strong> Ensure your total loss does not reach <strong>15%</strong> or more of your initial balance.</li><li><strong>Minimum Picks:</strong> Place at least <strong>15 sports picks</strong> during this phase.</li><li><strong>Risk Per Game:</strong> Maintain a <strong>minimum risk of 5%</strong> and a <strong>maximum of 10%</strong> per game.</li><li><strong>Time Limit:</strong> Complete these requirements within <strong>30 days</strong>. You can <strong>opt-in for no time limit</strong> by selecting the add-on when purchasing your challenge.</li></ul><h3><strong>Step 2 Requirements</strong></h3><ul><li><strong>Reward Target:</strong> Achieve <strong>20%</strong> of your starting balance.</li><li><strong>Daily Loss Limit:</strong> Do not lose <strong>10%</strong> or more of your initial account balance in a single day.</li><li><strong>Overall Loss Limit:</strong> Your total loss should not exceed <strong>15%</strong> of your starting balance.</li><li><strong>Minimum Picks:</strong> A minimum of <strong>15 sports picks</strong> are required in this phase as well.</li><li><strong>Risk Per Game:</strong> Maintain a <strong>minimum risk of 5%</strong> and a <strong>maximum of 10%</strong> per game.</li><li><strong>Time Limit:</strong> Complete within <strong>60 days</strong>. You can <strong>opt-in for no time limit</strong> by selecting the add-on when purchasing your challenge.</li></ul><h3><strong>Funded Account Requirements</strong></h3><ul><li><strong>Daily Loss Limit:</strong> Do not lose <strong>15%</strong> or more of your initial account balance in a single day.</li><li><strong>Overall Loss Limit:</strong> Your total loss should not exceed <strong>20%</strong> of your starting balance.</li><li><strong>Minimum Picks:</strong> A minimum of <strong>25 sports picks</strong> are required in this phase.</li><li><strong>Risk Per Game:</strong> The risk per game should be between <strong>5% and 10%</strong>.</li><li><strong>Monthly Rewards Cap:</strong><ul><li>First withdrawal: <strong>35%</strong> of your initial account balance.</li><li>Second withdrawal: <strong>45%</strong> of your initial account balance.</li><li>Third and subsequent withdrawals: <strong>50%</strong> of your initial account balance.</li><li>You will receive <strong>70%</strong> of any earnings up to the cap. Earnings above the cap are disqualified from the payout.</li></ul></li><li><strong>Time Limit:</strong> No time limit.</li></ul><h3><strong>Final Step:</strong></h3><ul><li><strong>Complete KYC (Know Your Customer) process.</strong></li><li>You can access your account anytime, but rewards will only be available after completing KYC.</li></ul><h3><strong>Daily Loss Timer Reset</strong></h3><ul><li>The timer resets at <strong>4 AM</strong> every day.</li><li>You cannot lose more than <strong>10%</strong> within that 24-hour period.</li></ul><h3><strong>Challenge Target Functionality</strong></h3><ul><li>Targets are based on the <strong>first games</strong> to end.</li><li>If the first <strong>4 out of 10 picks win</strong> and reach the profit target, you move to the next phase (no need to wait for the remaining picks).</li><li>If the first <strong>4 out of 10 picks lose</strong> and exceed the <strong>15% threshold</strong>, your account will be breached immediately (no need to wait for the remaining picks).</li></ul><h3><strong>Minimum Pick Functionality</strong></h3><ul><li>Multiple picks placed on the same outcome will count as <strong>one pick</strong> towards the pick objective.</li><li>Parlays count as <strong>one pick</strong>.</li></ul>"
      },
      
      {
        "title": "How Do the Drawdowns Work?",
        "details": "<p><strong>In Phases 1 & 2, and In the Funded Stage (Phase 3):</strong></p><p>Your daily and overall drawdown limits are fixed. For example, if you start with a <strong>$10,000</strong> challenge, your daily drawdown limit is <strong>10% ($1,000)</strong>, meaning you cannot lose <strong>$1,000</strong> or more in a single day. Your overall drawdown limit is <strong>15% ($1,500)</strong>, meaning your account cannot fall below <strong>$8,500</strong> at any given point. These limits remain constant and do not change, even if you make a profit during these phases.</p>"
      },
      
      {
        "title": "Receiving Your Rewards",
        "details": "<h2><strong>Getting Started with Your Funded Account</strong></h2><ul><li><strong>KYC:</strong> After receiving your funded account, complete the <strong>KYC</strong> process in your Funded Wagers Portal. Go to the <strong>Rewards</strong> tab and click <strong>KYC</strong> to verify your identity.</li><li><strong>Payment Details:</strong> Visit the <strong>Rewards</strong> tab and click <strong>Payment Details</strong> to enter your preferred <strong>bank/crypto payment information</strong>.</li></ul><hr><h2><strong>Receiving Rewards</strong></h2><ul><li><strong>Rewards Upon Request:</strong> Once you’ve completed the KYC and submitted your payment details (Bank / Crypto Address), you’ll be able to request a withdrawal.</li></ul><hr><h2><strong>Payout Periods</strong></h2><ul><li><strong>First Payout:</strong> After reaching the <strong>Funded Wagers</strong> stage, you must wait <strong>30 days</strong> for your first payout.</li><li><strong>Bi-Weekly Payout Option:</strong> Want faster payouts? You can <strong>opt-in for bi-weekly (every 2 weeks) payouts</strong> by selecting the add-on when purchasing your challenge!</li></ul><p>This approach ensures that the most successful sports pickers with consistent strategies are rewarded.</p><hr><h2><strong>Withdrawal Process and Rewards Cap</strong></h2><ul><li><strong>Adjustments on Payouts:</strong><ul><li>When requesting a payout, we first apply the <strong>monthly rewards cap</strong>.</li><li>Any profits exceeding the <strong>player score limit</strong> will be removed.</li><li>You’ll receive <strong>70%</strong> of the adjusted profit as per our <strong>rewards sharing agreement</strong>.</li><li>After your <strong>3rd successful payout</strong>, the profit split will increase to <strong>80%</strong>.</li></ul></li></ul><hr><h2><strong>Withdrawable Rewards</strong></h2><ul><li><strong>Monthly Rewards Cap:</strong><ul><li>For the <strong>3-step</strong> challenge, the <strong>monthly rewards cap</strong> is <strong>25%</strong> of your initial balance. For example, on a $10,000 account, you can withdraw up to <strong>$2,500</strong> per month.</li><li>For the <strong>2-step</strong> challenge, the cap is:<ul><li><strong>35%</strong> of your initial balance for your <strong>first withdrawal</strong></li><li><strong>45%</strong> of your initial balance for your <strong>second withdrawal</strong></li><li><strong>50%</strong> of your initial balance for <strong>third and subsequent withdrawals</strong></li></ul></li></ul></li><li><strong>Requesting Your First Withdrawal:</strong> You can request your first withdrawal after <strong>30 days</strong> of reaching the <strong>Funded</strong> stage.</li></ul><hr><p>If you have any questions regarding the contract or rewards process, feel free to reach out. We’re committed to making your sports-picking experience smooth and rewarding!</p>"
      },
      
      {
        "title": "Paying Taxes on Your Rewards",
        "details": "<h2><strong>Do I Need to Pay Taxes on My Rewards from Funded Wagers?</strong></h2><p>Yes, in most countries, including the United States, you are required to report and pay taxes on any income, including rewards earned through <strong>Funded Wagers</strong>.</p><hr><h2><strong>How Do I Report My Rewards on Funded Wagers?</strong></h2><p>You should report your <strong>Funded Wagers Rewards</strong> on your <strong>annual tax return</strong>. As an independent contractor, you may need to file a <strong>Schedule C</strong> (or the equivalent in your country) to report your income and expenses.</p><hr><p>For any further clarification, please contact a <strong>tax professional</strong>. It’s important to ensure you meet your tax obligations according to your country’s regulations.</p>"
      }
      
    ]
  },
  {
    "title": "Placing Picks on the Platform",
    "articles": 2,
    "content": [
      {
        "title": "Where to Place Picks?",
        "details": "<p>ADD VIDEO HERE</p><p>Once you've completed the <strong>Funded Wagers Challenge</strong>, head over to the dedicated section, usually labeled <strong>‘Place Picks’</strong> or <strong>‘Make Selections’</strong>. In this section, you'll find a wide range of available sports events or teams. Pick the ones you’re passionate about and ready to support.</p> <p>Your picks directly contribute to the excitement and success of your chosen teams or events within the <strong>Funded Wagers</strong> platform, helping you move closer to earning rewards.</p> "
      },
      
      { "title": "How to Place a Pick?", "details": "<p>ADD VIDEO HERE</p><p>Once you’ve successfully completed the <strong>Funded Wagers Challenge</strong>, you earn the opportunity to select your favorite teams and place picks. Simply navigate to the designated section, choose the teams or events that excite you, and make your picks confidently.</p><p>Your achievement in completing the challenge grants you the privilege to engage with and support your favorite teams, enhancing your experience as you make strategic picks on the platform.</p> " }
    ]
  }
         
        ];
        
        const Faq = () => {
          const [activeTab, setActiveTab] = useState(null);
          const [selectedArticle, setSelectedArticle] = useState(null);
        
          return (
            <>
              <Navbar />
              <div className="Faq-main">
                <div className="Faq-page">
                  <div className="faq-Top">
                    <h5>Advice and Answers from the Funded Wagers Team</h5>
                    <div className="search-faq">
                      <FaSearch style={{ marginRight: "10px", color: "#888" }} />
                      <input type="text" placeholder="Search for articles..." />
                    </div>
                  </div>
        
                  {/* Show Categories if No Tab is Selected */}
                  {activeTab === null && selectedArticle === null && (
                    <div className="faq-btm">
                      {faqData.map((item, index) => (
                        <div key={index} className="f-btm-1" onClick={() => setActiveTab(index)}>
                          <div className="f-btm-left">
                            <img src={FaqImg} alt="" />
                          </div>
                          <div className="f-btm-right">
                            <h6>{item.title}</h6>
                            <span>{item.articles} articles</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
        
                  {/* Show Articles List when a Category is Selected */}
                  {activeTab !== null && selectedArticle === null && (
                    <div className="faq-content">
                      <button className="back-btn" onClick={() => setActiveTab(null)}>
                        <i className="ri-arrow-left-double-line"></i> Back
                      </button>
                      <h3>{faqData[activeTab].title}</h3>
                      <span>{faqData[activeTab].articles} articles</span>
                      <div className="faq-articles">
                        <div className="faq-item">
                        {faqData[activeTab].content.map((article, index) => (
                          <span key={index} onClick={() => setSelectedArticle(article)}>
                            <h6>{article.title}</h6>
                            <i style={{ color: "#D000CC" }} className="ri-arrow-right-s-line"></i>
                          </span>
                        ))}
                        </div>
                       
                      </div>
                    </div>
                  )}
        
                  {/* Show Article Details when an Article is Selected */}
                  {selectedArticle && (
                    <div className="faq-article-details">
                      <button className="back-btn" onClick={() => setSelectedArticle(null)}>
                        <i className="ri-arrow-left-double-line"></i> Back
                      </button>
                      <h6>{selectedArticle.title}</h6>
                       <div className="detail-f">
                       {/* <p>{selectedArticle.details}</p> */}
                       <div dangerouslySetInnerHTML={{ __html: selectedArticle.details }} />
                       </div>
                    </div>
                  )}
                </div>
              </div>
              <Footer />
            </>
          );
        };
        
        export default Faq;
