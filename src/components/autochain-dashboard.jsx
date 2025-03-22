"use client"

import { useState } from "react"
import { ArrowRight, ArrowUp, Flag, List, Plus, RefreshCw, SquareAsterisk } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function AutochainDashboard() {
  const [selectedAction, setSelectedAction] = useState(null)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="bg-[#1a1b2e] text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">AutoChain</h1>
            <div className="h-6 w-6 rounded-full bg-blue-400"></div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="font-medium">
              Dashboard
            </a>
            <a href="#" className="font-medium">
              My Tasks
            </a>
            <a href="#" className="font-medium">
              Templates
            </a>
            <a href="#" className="font-medium">
              Docs
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">Connect Wallet</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Create New Automated Task */}
            <div className="lg:col-span-2">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Create New Automated Task</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Steps */}
                  <div className="flex items-start mb-6">
                    <div className="flex flex-col items-center mr-8">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">
                        1
                      </div>
                      <div className="h-16 w-0.5 bg-gray-200 my-2"></div>
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-bold">
                        2
                      </div>
                      <div className="h-16 w-0.5 bg-gray-200 my-2"></div>
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-bold">
                        3
                      </div>
                    </div>
                    <div className="flex flex-col gap-16 mt-2">
                      <div>
                        <h3 className="font-medium">Select Action</h3>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-500">Set Conditions</h3>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-500">Review & Launch</h3>
                      </div>
                    </div>
                  </div>

                  {/* Action Options */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <Card
                      className={`cursor-pointer border hover:border-blue-500 transition-all ${selectedAction === "send" ? "border-blue-500 border-2" : ""}`}
                      onClick={() => setSelectedAction("send")}
                    >
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                          <ArrowUp className="h-5 w-5 text-blue-600" />
                        </div>
                        <h3 className="font-medium mb-1">Send Tokens</h3>
                        <p className="text-xs text-gray-500">ETH, ERC20 tokens</p>
                      </CardContent>
                    </Card>

                    <Card
                      className={`cursor-pointer border hover:border-blue-500 transition-all ${selectedAction === "swap" ? "border-blue-500 border-2" : ""}`}
                      onClick={() => setSelectedAction("swap")}
                    >
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                          <RefreshCw className="h-5 w-5 text-gray-600" />
                        </div>
                        <h3 className="font-medium mb-1">Swap Tokens</h3>
                        <p className="text-xs text-gray-500">DEX integrations</p>
                      </CardContent>
                    </Card>

                    <Card
                      className={`cursor-pointer border hover:border-blue-500 transition-all ${selectedAction === "contract" ? "border-blue-500 border-2" : ""}`}
                      onClick={() => setSelectedAction("contract")}
                    >
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                          <SquareAsterisk className="h-5 w-5 text-gray-600" />
                        </div>
                        <h3 className="font-medium mb-1">Smart Contract</h3>
                        <p className="text-xs text-gray-500">Custom interactions</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Card
                      className={`cursor-pointer border hover:border-blue-500 transition-all ${selectedAction === "stake" ? "border-blue-500 border-2" : ""}`}
                      onClick={() => setSelectedAction("stake")}
                    >
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                          <Flag className="h-5 w-5 text-gray-600" />
                        </div>
                        <h3 className="font-medium mb-1">Stake Assets</h3>
                        <p className="text-xs text-gray-500">Staking protocols</p>
                      </CardContent>
                    </Card>

                    <Card
                      className={`cursor-pointer border hover:border-blue-500 transition-all ${selectedAction === "batch" ? "border-blue-500 border-2" : ""}`}
                      onClick={() => setSelectedAction("batch")}
                    >
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                          <List className="h-5 w-5 text-gray-600" />
                        </div>
                        <h3 className="font-medium mb-1">Batch Actions</h3>
                        <p className="text-xs text-gray-500">Multiple executions</p>
                      </CardContent>
                    </Card>

                    <Card
                      className={`cursor-pointer border hover:border-blue-500 transition-all ${selectedAction === "custom" ? "border-blue-500 border-2" : ""}`}
                      onClick={() => setSelectedAction("custom")}
                    >
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                          <Plus className="h-5 w-5 text-gray-600" />
                        </div>
                        <h3 className="font-medium mb-1">Custom</h3>
                        <p className="text-xs text-gray-500">Build your own</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700" disabled={!selectedAction}>
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Gas Optimization */}
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle>Gas Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-600">
                          Current Ethereum Gas: <span className="font-medium">32 Gwei</span>
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">
                          Tasks waiting for lower gas: <span className="font-medium">5</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* AVS Node Health */}
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle>AVS Node Health</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Progress value={90} className="h-4 bg-gray-100" />
                      <p className="text-gray-600">
                        Node Performance: <span className="font-medium">90%</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Network Stats */}
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Network Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-medium mb-4">EigenLayer AVS</h3>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Active Nodes:</span>
                      <span className="font-medium">247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Staked:</span>
                      <span className="font-medium">458,723 ETH</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AutoChain Activity */}
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>AutoChain Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tasks Created:</span>
                      <span className="font-medium">12,458</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tasks Executed (24h):</span>
                      <span className="font-medium">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Success Rate:</span>
                      <span className="font-medium">99.7%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Tasks */}
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Recent Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-400 flex-shrink-0"></div>
                      <div className="flex-1">
                        <h4 className="font-medium">ETH → USDC Swap</h4>
                        <p className="text-sm text-gray-500">Executed • 5 min ago</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">0.5 ETH</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-400 flex-shrink-0"></div>
                      <div className="flex-1">
                        <h4 className="font-medium">Weekly DCA</h4>
                        <p className="text-sm text-gray-500">Scheduled • In 2 days</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">0.2 ETH</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Become an AVS Node Operator */}
              <Card className="shadow-sm bg-[#1a1b2e] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Become an AVS Node Operator</h3>
                  <p className="text-gray-300 mb-6">Help secure the network and earn rewards</p>
                  <Button className="bg-blue-600 hover:bg-blue-700">Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

