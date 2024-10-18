import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import axios from '@/services/axiosInstance'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const SubmitBug = () => {

  const [bugTitle, setBugTitle] = useState("");
  const [repositoryName, setRepositoryName] = useState("");
  const [prLink, setPrLink] = useState("");
  const [stepsToReproduce, setStepsToReproduce] = useState("");
  const [expectedBehaviour, setExpectedBehaviour] = useState("");
  const [actualBehaviour, setActualBehaviour] = useState("");
  const [additionalComments, setAdditionalComments] = useState("");
  const [screenshots, setScreenshots] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!bugTitle || !repositoryName || !prLink || !stepsToReproduce || !expectedBehaviour || !actualBehaviour || !screenshots) {
      toast.error("Input Fields Empty");
      return;
    }

    setLoading(true);

    const data = {
      title: bugTitle,
      repository_name: repositoryName,
      expected_behavior: expectedBehaviour,
      actual_behavior: actualBehaviour,
      steps_to_reproduce: stepsToReproduce,
      screenshot_url: screenshots,
      pr_link: prLink,
      additional_comments: additionalComments
    }

    try {
      const response = await axios.post("/bugs/create", data)
      if (response.status === 201) {
        toast.success("Bug Submitted Successfully")
      }
    } catch (err) {
      console.error(err);
      const message = err.response?.data?.message || 'Server Error';
      toast.error(message);
    }

    setLoading(false);

    setBugTitle("");
    setRepositoryName("");
    setPrLink("")
    setStepsToReproduce("");
    setExpectedBehaviour("");
    setActualBehaviour("");
    setAdditionalComments("");
    setScreenshots("");
  }

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="w-[75vw] flex justify-between px-5">
        <div className="w-[30vw] flex flex-col gap-5">
          <div className="grid items-center gap-1.5">
            <Label htmlFor="bugTitle">Bug Title</Label>
            <Input
              type="text"
              id="bugTitle"
              placeholder="Bug Title"
              value={bugTitle}
              onChange={(e) => { setBugTitle(e.target.value) }}
            />
          </div>
          <div className="grid items-center gap-1.5">
            <Label htmlFor="repositoryName">Repository Name</Label>
            <Input
              type="text"
              id="repositoryName"
              placeholder="Repository Name"
              value={repositoryName}
              onChange={(e) => { setRepositoryName(e.target.value) }}
            />
          </div>
          <div className="grid items-center gap-1.5">
            <Label htmlFor="prLink">PR Link</Label>
            <Input
              type="text"
              id="prLink"
              placeholder="PR Link"
              value={prLink}
              onChange={(e) => { setPrLink(e.target.value) }}
            />
          </div>
          <div className="grid items-center gap-1.5">
            <Label htmlFor="stepsToReproduce">Steps to reproduce</Label>
            <Textarea
              className="min-h-32 resize-none"
              id="stepsToReproduce"
              placeholder="Steps to reproduce"
              value={stepsToReproduce}
              onChange={(e) => { setStepsToReproduce(e.target.value) }}
            />
          </div>
          <div className="grid items-center gap-1.5">
            <Label htmlFor="expectedBehaviour">Expected Behaviour</Label>
            <Textarea
              className="min-h-32 resize-none"
              id="expectedBehaviour"
              placeholder="Expected Behaviour"
              value={expectedBehaviour}
              onChange={(e) => { setExpectedBehaviour(e.target.value) }}
            />
          </div>
        </div>
        <div className="w-[30vw] flex flex-col gap-5">
          <div className="grid items-center gap-1.5">
            <Label htmlFor="actualBehaviour">Actual Behaviour</Label>
            <Textarea
              className="min-h-32 resize-none"
              id="actualBehaviour"
              placeholder="Actual Behaviour"
              value={actualBehaviour}
              onChange={(e) => { setActualBehaviour(e.target.value) }}
            />
          </div>
          <div className="grid items-center gap-1.5">
            <Label htmlFor="additionalComments">Additinal Comments (<span className="text-red-500">optional</span>) </Label>
            <Textarea
              className="min-h-32 resize-none"
              id="additionalComments"
              placeholder="Additional Comments"
              value={additionalComments}
              onChange={(e) => { setAdditionalComments(e.target.value) }}
            />
          </div>
          <div className="grid items-center gap-1.5">
            <Label htmlFor="screenshots">Screenshots / Logs</Label>
            <Textarea
              className="min-h-32 resize-none"
              id="screenshots"
              placeholder="Screenshot Links"
              value={screenshots}
              onChange={(e) => { setScreenshots(e.target.value) }}
            />
          </div>
          <Button
            className="mb-5"
            disabled={loading}
            type="submit"
            onClick={handleSubmit}
          >
            {!loading?"Submit":"Submitting..."}
          </Button>
        </div>
      </div>
    </>
  )
}

export default SubmitBug